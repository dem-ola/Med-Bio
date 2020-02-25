'use strict'

import * as glob from './setup.jsx';
import * as dom from "./lib-doms.jsx";

const Btn = dom.Btn;
const BuildElems = dom.BuildElems;
const baseUrl = `${glob.params.backendhost}:${glob.params.backendport}`

const fields = {
    'username': 'preferred title',
    'pwhash': 'password',
}

export default class AddUser extends React.Component {   
    constructor(props) {
        super(props);
        this.checkInputs = this.checkInputs.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.submit = this.submit.bind(this);
        this.state = {
            addUserNote: 'Give new user a temporary password to change on first login',
            username: '',
            pwhash: '',
            feedback: '',
            checks: ['username', 'pwhash']
        }
    }

    handleKeyUp(e) {
        let id = e.target.id.split('-')[0];
        let value = e.target.value
        switch(id) {
            case 'username':
                this.setState({username: value});
                break;
            case 'pwhash':
                this.setState({pwhash: value});
                break;
        }
    }

    checkInputs() {
        // simple checks, could be more sophisticated
        for (let c of this.state.checks) {
            let _c = c.replace('_', ' ').capitalize();
            let minChars = 6;
            if (this.state[c] == null || this.state[c] == undefined) { 
                return `Select a value for ${_c}`
            }
            if (this.state[c].trim() == '') { 
                return `${_c} cannot be blank`
            }
            if (this.state[c].length < minChars) { 
                return `${_c} must have a minimum ${minChars} characters`
            }
        }
        return true;
    }

    submit() {
        let check = this.checkInputs(); // front-end checks

        if (check == true) {

            let url = `${baseUrl}/${glob.endpoints.users}/add?`;
            url += `&username=${this.state.username}`
            url += `&pwhash=${this.state.pwhash}`
            
            fetch(url, {
                method: 'POST',
            })
            .then(resp => {
                if (resp.status == 200) {
                    // feedback and reset
                    this.setState({
                        feedback: 'New user successfully added',
                        username: '',
                        pwhash: '',
                    });

                    let inputs = document.querySelectorAll('.input-box');
                    for (let inp of inputs) {
                        inp.value = '';
                    }

                } else {
                    return resp.json();                   
                }
            })
            .then((respJson) => {
                if (respJson.msg) { // catch server side errors
                    let msg = respJson.msg;
                    if (msg.includes('Duplicate entry')) {
                        this.setState({feedback: 'Error: duplicate entry'})
                    } else {
                        this.setState({feedback: 'Error: record could not be added'})
                    }  
                } else {
                    this.setState({feedback: 'Error: not added - check details'})  
                }
            });
        } else {
            this.setState({feedback: check})
        }
    }

    render() {  
        return ( 
            <div>
                <div>
                    <BuildElems 
                        elem='input' 
                        data={fields} 
                        onKeyUp={this.handleKeyUp}
                    /> 
                </div>
                <div id='add-user-note'> {this.state.addUserNote} </div>
                <div className='feedback'>{this.state.feedback}</div>
                <div id='submission'>
                    <Btn 
                        id='btn-submit'
                        className='btn'
                        txt='Submit' 
                        onClick={this.submit}
                    />
                </div> 
            </div>
        )
    }
}

ReactDOM.render(
    <div></div>, // empty so DidMount will work
    document.getElementById('root')
)