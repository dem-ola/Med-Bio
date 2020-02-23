'use strict'

import * as glob from './setup.jsx';
import * as dom from "./lib-doms.jsx";

const Btn = dom.Btn;
const BuildElems = dom.BuildElems;
const baseUrl = `${glob.params.backendhost}:${glob.params.backendport}`
const baseHttpUrl = `${glob.params.backendhost}:${glob.params.frontendport}`
const fields = {
    'username': 'your login username',
    'password': 'your login password',
}

export default class Login extends React.Component {   
    constructor(props) {
        super(props);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.submit = this.submit.bind(this);
        this.state = {
            uname: null,
            pw: null,
            feeback: '', 
        }
    }

    handleKeyUp(e) {
        let id = e.target.id.split('-')[0];
        let value = e.target.value
        switch(id) {
            case 'username':
                this.setState({uname: value});
                break;
            case 'password':
                this.setState({pw: value});
                break;
        }
    }

    submit() {
        let url = `${baseUrl}/${glob.endpoints.login}?`;
        url += `&username=${this.state.uname}`
        url += `&pwhash=${this.state.pw}`

        // we can't open a window from inside a promise 
        // as its outside the calling click's event loop
        // so we store variables to call later
        let newPage = window.open('', '_self');
        let newUrl = `${baseHttpUrl}/${glob.routes['view']}`

        fetch(url, {
            method: 'GET',
        })
        .then(resp => {
            if (resp.statusText == 'OK') {                
                return resp.json();
             }
        })
        .then((respJson) => {
            if (respJson.msg) {
                this.setState({feedback: respJson.msg})
            } else {
                this.setState({feedback: ''});      
                newPage.location.href = newUrl;
            } 
        });
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
                <div className='feedback'>{this.state.feedback}</div>
                <div id='submission'>
                    <Btn 
                        id='btn-submit'
                        className='btn'
                        txt='Submit' 
                        submit={this.submit}
                    />
                </div> 
            </div>
        )
    }
}

