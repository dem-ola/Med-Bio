'use strict'

import * as glob from './setup.jsx';
import * as dom from "./lib-doms.jsx";

let point = 'patients';
const Btn = dom.Btn;
let Table = dom.CustomTable;
const baseUrl = `${glob.params.backendhost}:${glob.params.backendport}`
const baseHttpUrl = `${glob.params.backendhost}:${glob.params.frontendport}`

const headerCols = [
    ['id', 'col-verynarrow'],
    ['title', 'col-short-medium'],
    ['first_name', 'col-medium'],
    ['last_name', 'col-medium'],
    ['date_of_birth', 'col-medium'],
]

export default class Patients extends React.Component {   
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit() {
        window.open(`${baseHttpUrl}/${glob.routes['patients-add']}`, '_self');
    }

    render() {  
        return ( 
            <div>
                <Table 
                    source={`${baseUrl}/${glob.endpoints[point]}`}
                    headers={headerCols}
                    transforms={true}
                />
                <div id='submission'>
                    <Btn 
                        id='btn-submit'
                        className='btn btn-add'
                        txt='Add New Patient' 
                        onClick={this.submit}
                    />
                </div> 
            </div>
        )
    }
}

