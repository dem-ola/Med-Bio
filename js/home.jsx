'use strict'

import * as glob from './setup.jsx';
import * as dom from "./lib-doms.jsx";

const messageMajor = 'Welcome!';
const messageMinor = 'The Premier Prescription Pharmaceutical Company'
const Btn = dom.Btn;
const baseHttpUrl = `${glob.params.backendhost}:${glob.params.frontendport}`
const img = `${baseHttpUrl}/images/${glob.homeImage}`

export default class Home extends React.Component {   
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit() {
        let newPage = window.open('', '_self');
        let newUrl = `${baseHttpUrl}/${glob.routes['login']}`
        newPage.location.href = newUrl;
    }

    render() { 
        return ( 
            <div>
                <div>
                    <img id='homeImage' src={img} />
                    <div id='welcome-msg'>
                        <div className='msg-major'>{messageMajor}</div>
                        <div className='msg-minor'>{messageMinor}</div>
                   
                    <div id='btn-home-login' className='submission'>
                        <Btn 
                            id='btn-submit'
                            className='btn'
                            txt='Login' 
                            onClick={this.submit}
                        />
                    </div> 
                    </div>
                </div>
            </div>
        )
    }
}

