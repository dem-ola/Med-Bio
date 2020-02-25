'use strict'

import * as glob from './setup.jsx';
import * as dom from "./lib-doms.jsx";

let point = 'prescribers';
const Btn = dom.Btn;
let Table = dom.CustomTable;
const baseUrl = `${glob.params.backendhost}:${glob.params.backendport}`
const baseHttpUrl = `${glob.params.backendhost}:${glob.params.frontendport}`

const headerCols = [
    ['id', 'col-verynarrow'],
    ['first_name', 'col-medium'],
    ['last_name', 'col-medium'],
    ['position', 'col-medium'],
]

export default class Prescribers extends React.Component {   
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit() {}

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
                        txt='Add New Prescriber (Not Active)' 
                        onClick={this.submit}
                    />
                </div> 
            </div>
        )
    }
}




