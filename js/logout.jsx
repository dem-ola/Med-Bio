'use strict'

import * as glob from './setup.jsx';
import * as dom from "./lib-doms.jsx";

const Btn = dom.Btn;
const baseUrl = `${glob.params.backendhost}:${glob.params.backendport}`
const baseHttpUrl = `${glob.params.backendhost}:${glob.params.frontendport}`

export default class Logout extends React.Component {   
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.state = {
            feeback: '', 
        }
    }

    submit() {}

    render() { 
        return ( 
            <div>
                <div className='feedback'>This page is under construction</div>
                <div id='submission'>
                    <Btn 
                        id='btn-submit'
                        className='btn'
                        txt='Logout' 
                        submit={this.submit}
                    />
                </div> 
            </div>
        )
    }
}

