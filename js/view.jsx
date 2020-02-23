'use strict'

import * as glob from './setup.jsx';
import * as dom from "./lib-doms.jsx";

const BuildElems = dom.BuildElems;
const baseHttpUrl = `${glob.params.backendhost}:${glob.params.frontendport}`

export default class View extends React.Component {   
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.state = {
            btnLinks: {
                'patients': ['View', 'patients'],
                'prescribers': ['View', 'prescribers'],
                'medicines': ['Not Active', ''],
                'prescriptions': ['Not Active', ''],
                'orders': ['Not Active', '']
            }
        }
    }

    submit(e) {
        let subject = e.target.id.split('-')[1];     // return a btnlink key
        let point = (subject == 'users') ? 'users' : this.state.btnLinks[subject][1];
        let url = `${baseHttpUrl}/${glob.routes[point]}`;
        if (!url.endsWith('undefined')) { // blanks in btnLinks above
            window.open(url, '_self');
        }
    }

    render() {  
        return ( 
            <div>
                <div>
                    <BuildElems 
                        elem='btn' 
                        data={this.state.btnLinks} 
                        submit={this.submit}
                    />
                </div>
                <hr class='medium-line'/>
                <div class='line-comment'>Admin Use Only</div>
                <div>
                    <BuildElems
                        elem='btn'
                        data={{'users':['View','users']}}
                        submit={this.submit}
                    />
                </div>
            </div>
        )
    }
}


