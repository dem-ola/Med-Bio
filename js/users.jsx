'use strict'

import * as glob from './setup.jsx';
import * as dom from "./lib-doms.jsx";

let point = 'users';
const Btn = dom.Btn;
let Table = dom.CustomTable;
const baseUrl = `${glob.params.backendhost}:${glob.params.backendport}`
const baseHttpUrl = `${glob.params.backendhost}:${glob.params.frontendport}`

const headerCols = [
    ['id', 'col-verynarrow'],
    ['username', 'col-medium']
]

export default class Prescribers extends React.Component {   
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit() {
        window.open(`${baseHttpUrl}/${glob.routes['users-add']}`, '_self');
    }

    render() {  
        return ( 
            <div>
                <Table 
                    source={`${baseUrl}/${glob.endpoints[point]}`}
                    headers={headerCols}
                    transforms={false}
                />
                <div className='submission'>
                    <Btn 
                        id='btn-submit'
                        className='btn btn-add'
                        txt='Add New User' 
                        onClick={this.submit}
                    />
                </div> 
            </div>
        )
    }
}




