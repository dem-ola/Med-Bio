'use strict'

import * as glob from './setup.jsx';
import * as dom from "./lib-doms.jsx";
import * as func from './lib-funcs.js';

const DropDown = dom.DropDown;
const DateInput = dom.DateInput;
const Btn = dom.Btn;
const Label = dom.Label;
const BuildElems = dom.BuildElems;
const baseUrl = `${glob.params.backendhost}:${glob.params.backendport}`
const fields = {
    'title': 'preferred title',
    'first name': 'first name',
    'last name': 'last name',
}

export default class AddPatient extends React.Component {   
    constructor(props) {
        super(props);
        this.getGenders = this.getGenders.bind(this);
        this.checkInputs = this.checkInputs.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
        this.state = {
            genders: [],
            title: null,
            gender: null,
            first_name: '',
            last_name: '',
            dobd: '01',
            dobm: '01',
            doby: func.firstYear,
            primary_prescriber: null,
            feedback: '',
            checks: ['first_name', 'last_name', 'gender']
        }
    }

    componentDidMount() {
        this.getGenders(); 
        // here b/c if in render it'll cause an infinite loop
    }

    handleKeyUp(e) {
        let id = e.target.id.split('-')[0];
        let value = e.target.value
        switch(id) {
            case 'title':
                this.setState({title: value});
                break;
            case 'firstname':
                this.setState({first_name: value});
                break;
            case 'lastname':
                this.setState({last_name: value});
                break;
        }
    }

    handleChange(e) {
        let id = e.target.id;
        let value = e.target.value;
        function ifInt(value) {
            if (Number.isInteger(value)) {
                value = value < 10 ? '0'+value : String(value);
            }
            return value
        }

        switch(id) {
            case 'select-date':
                this.setState({dobd: ifInt(value)});
                break;
            case 'select-month':
                this.setState({dobm: ifInt(vars.months.indexOf(value))});
                break;
            case 'select-year':
                this.setState({doby: value});
                break;
            case 'gender':
                this.setState({gender: value});
                break;
        }
    }

    getGenders() {
        let url = `${baseUrl}/${glob.endpoints.genders}`
        fetch(url, {
            method: 'GET',
        })
        .then((response) => {
            if (response.status == 200) {
                return response.json();
            } else {
                this.setState({feedback: 'Server error getting gender names'});
            }
          })
          .then((responseJson) => {
                let gend = ['SELECT'];
                for (let item of Object.entries(responseJson.data)) {
                    gend.push((item[1].name))
                }
                this.setState({genders: gend});
          });
    }

    checkInputs() {
        // simple checks, could be more sophisticated
        for (let c of this.state.checks) {
            let _c = c.replace('_', ' ').capitalize();
            let minChars = 2;
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

            let url = `${baseUrl}/${glob.endpoints.patients}/add?`;
            let dob = `${this.state.doby}-${this.state.dobm}-${this.state.dobd}`
            url += `&first_name=${this.state.first_name}`
            url += `&last_name=${this.state.last_name}`
            url += `&title=${this.state.title}`
            url += `&date_of_birth=${dob}`
            url += `&gender=${this.state.gender}`
            url += `&registered_date=`+(new Date()).toDbString()

            fetch(url, {
                method: 'POST',
            })
            .then(resp => {
                if (resp.status == 200) {
                    // feedback and reset
                    this.setState({
                        feedback: 'New patient successfully added',
                        first_name: '',
                        last_name: '',
                        gender: null
                    });

                    let inputs = document.querySelectorAll('.input-box');
                    for (let inp of inputs) {
                        inp.value = '';
                    }

                    let genderOption = document.querySelector('#gender');
                    genderOption.options[0].selected="true";

                } else {
                    return resp.json();                   
                }
            })
            .then((respJson) => {
                if (respJson.msg) { // catch server side errors
                    let msg = respJson.msg;
                    if (msg.includes('Duplicate entry')) {
                        this.setState({feedback: 'Error: duplicate entry'})
                    } else if (msg.includes("FOREIGN KEY (`gender`)")) {
                        this.setState({feedback: 'Error: select a Gender option'})
                    } else {
                        this.setState({feedback: 'Error: record could not be added'})
                    }  
                } else {
                    this.setState({feedback: 'Error: not added - check details'})  
                }
            });
        }  else {
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
                <div className='form-item'>
                    <Label 
                        id='date-birth' 
                        className='horizontal-label'
                        label='Date of Birth' 
                    />
                    <DateInput 
                        id='date-birth'                        
                        className='date-calendar'
                        onChange={this.handleChange}
                    />
                </div>
                <div className='form-item'>
                    <Label 
                        id='gender-label' 
                        className='horizontal-label'
                        label='Gender' 
                    />
                    <DropDown
                        id='gender'
                        items={this.state.genders}
                        onChange={this.handleChange}
                    />
                </div>
                <div className='feedback'>{this.state.feedback}</div>
                <div className='submission'>
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





