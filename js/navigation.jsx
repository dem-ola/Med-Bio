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
        return ( 
            <div>
                <div> 
                    <BuildElems 
                        elem='navbar' 
                        data={this.props.links} 
                        baseHttpUrl={baseHttpUrl}
                    /> 
                </div>
            </div>
        )
    }
}

