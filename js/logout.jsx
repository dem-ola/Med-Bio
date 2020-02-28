'use strict'

import * as glob from './setup.jsx';
import * as dom from "./lib-doms.jsx";

import {store} from './store.js';
import {setLoggedOut} from './actions'

const Btn = dom.Btn;
const baseUrl = `${glob.params.backendhost}:${glob.params.backendport}`
const baseHttpUrl = `${glob.params.backendhost}:${glob.params.frontendport}`

export default class Logout extends React.Component {   
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.state = {
            feedback: 'Confirm log out below', 
        }
    }

    submit() {
        let newPage = window.open('', '_self');
        let newUrl = `${baseHttpUrl}/${glob.routes['home']}`
        store.subscribe(() => store.getState())
        store.dispatch(setLoggedOut('LOGGED-OUT'));
        this.props.onLogAction();
        newPage.location.href = newUrl;
    }

    render() { 
        return ( 
            <div>
                <div className='feedback'>{this.state.feedback}</div>
                <div className='submission'>
                    <Btn 
                        id='btn-submit'
                        className='btn'
                        txt='Logout' 
                        onClick={this.submit}
                    />
                </div> 
            </div>
        )
    }
}

