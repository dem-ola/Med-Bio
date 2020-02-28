'use strict'

import * as glob from './setup.jsx';
import * as dom from "./lib-doms.jsx";

const BuildElems = dom.BuildElems;
const baseHttpUrl = `${glob.params.backendhost}:${glob.params.frontendport}`

export default class Navigation extends React.Component {   
    constructor(props) {
        super(props);
    }

    render() { 
        // copy to avoid changing original
        // edit nav bar depending on logged in status
        let links = Object.assign({}, this.props.links);
        if (this.props.isLoggedIn == 'true') {
            delete links['login'];
        } else {
            for (let k of Object.keys(links)) {
                if (!['home', 'login'].includes(k)) {
                    delete links[k]
                }
            }
        }
        return ( 
            <div>
                <div> 
                    <BuildElems 
                        elem='navbar' 
                        data={links} 
                        baseHttpUrl={baseHttpUrl}
                    /> 
                </div>
            </div>
        )
    }
}

