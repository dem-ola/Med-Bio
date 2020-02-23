import {params} from './setup.jsx';
import * as func from './lib-funcs.js';

export class Page extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id={this.props.id}>
                {this.props.header}
                {this.props.content}
                {this.props.footer}
            </div>
        )
    }
}

export class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id='header' className='section'>
                <div id='head-nav'>{this.props.nav}</div>
                <div id='head-corp'>{params.corpName}</div>
                <hr className='divider'/>
                <div id='head-name'>{this.props.name}</div>
                <span className='head-clock'>{this.props.time}</span>
                <div id='head-content'>{this.props.content}</div>
            </div>
        )
    }
}

export class CustomTable extends React.Component {   
    constructor(props) {
        super(props);
        this.getList = this.getList.bind(this);
        this.state = {
            headers: [],
            rows: [],
            error: ''
        }
    }

    componentDidMount() {
        this.getList();
    }

    getList() {
        let url = this.props.source;
        let heads = this.props.headers;
        let _records;
        fetch(url, {method: 'GET',})
        .then(resp => {return resp.json()})
        .then((records) => {
            if (this.props.transforms) {
                records.data.map((p) => {
                    
                    let title = p['title']
                    if (title == 'null') {
                        p['title'] = '';
                    }
                    
                    let dob = new Date(p['date_of_birth']);
                    dob = dob.toCustomString('very short');
                    p['date_of_birth'] = dob;
                })
            }
            _records = records;
            return (
                <BuildElems 
                    elem='row' 
                    isHeads={false} 
                    heads={heads} 
                    data={records.data}
                />
            )})
        .then((rows) => {
            this.setState({rows: rows})})
        .then(() => {
            return (
                <BuildElems 
                    elem='row' 
                    isHeads={true} 
                    heads={heads} 
                    data={_records.data}
                />
            )})
        .then((headers) => { 
            this.setState({headers: headers})})
        .catch((err) => {
            this.setState({error: 'Sorry, we could not fetch the list'})})
    }

    render() {  
        return ( 
            <div>
                <div id='table'>
                    <div id='table-head-section'>{this.state.headers}</div>
                    <div id='table-row-section'>{this.state.rows}</div>
               </div>
               <div className='feedback'> {this.state.error}</div>
            </div>
        )
    }
}

export class Content extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id='content' className='section'>
                <div id='content-title'>{this.props.cTitle}</div>
                <div id='content-main'>{this.props.content}</div>
            </div>
        )
    }
}

export class Footer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id='footer' className='section'>
                <div className='foot-content'>{this.props.content}</div>
            </div>
        )
    }
}

export class DateInput extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let cName = func.concatClassName('date-input', this.props.className);
        return (
            <div id={this.props.id} className={cName}>
                <span>
                    <DropDown 
                        id='select-date'
                        items={func.vars.dates}
                        onChange={this.props.onChange}
                    />
                </span>
                <span>
                    <DropDown 
                        id='select-month'
                        items={func.vars.months}
                        onChange={this.props.onChange}
                    />
                </span>
                <span>
                    <DropDown 
                        id='select-year'
                        items={func.vars.years}
                        onChange={this.props.onChange}
                    />
                </span>
            </div>
        )
    }
}

export class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clocked: new Date().toCustomString(),
        }
    }

    componentDidMount() {
        setInterval(function() {  
            this.setState(
                {clocked: new Date().toCustomString()}
            );
        }.bind(this), 1000); // need bind!
    }

    render() {
        return (
            <div id='clock'>{this.state.clocked}</div>
        )
    }
}

export class Row extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let r;        
        if (this.props.isHeads) {
            r = this.props.heads.map((h) => {
                let val = h[0].replace(/_/g, ' ');
                let cName = `row-item-head ${h[1]}`;
                return <span className={cName}>{val}</span>
            }); 
            return <div className='table-row table-row-head'>{r}</div>  
        } else {
            r = this.props.heads.map((h) => {
                let val = this.props.data[h[0]];
                let cName = `row-item ${h[1]}`;
                return <span className={cName}>{val}</span>       
            }) 
            return <div className='table-row'>{r}</div>     
        }
    }
}

export class BuildElems extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let collection = [];
        switch(this.props.elem) {
            
            case 'btn':
                for (let e of Object.entries(this.props.data)) {
                    let label = e[0];
                    let txt = e[1][0];
                    let id = label+'-name-box';
                    collection.push (
                        <div className='form-item'>
                            <Label 
                                id={`label-${id}`}
                                className='horizontal-label'
                                label={label} 
                            />
                            <Btn 
                                id={`btn-${id}`}
                                className='btn btn-verticals'
                                txt={txt} 
                                submit={this.props.submit}
                            />
                        </div>
                    )
                }
                return <div>{collection}</div>

            case 'input': 
                for (let e of Object.entries(this.props.data)) { 
                    let label = e[0];
                    let placeholder = e[1];
                    let id = label.replace(' ','')+'-name-box';
                    collection.push (
                        <div className='form-item'>
                            <Label 
                                id={`label-${id}`}
                                className='horizontal-label'
                                label={label} 
                            />
                            <InputBox
                                id={id}
                                className='input-box std-inbox'
                                place={placeholder}
                                onKeyUp={this.props.onKeyUp}
                            />
                        </div>
                    )
                }
                return <div>{collection}</div>

            case 'row': 
                let i = 0;
                let isHeads = this.props.isHeads;
                let headers = this.props.heads;
                let data = this.props.data;
                let items = isHeads ? headers : data;
                for (let e of items) {
                    collection.push (
                        <div className='form-item'>
                           < Row 
                                key={i++}
                                isHeads={isHeads}
                                heads={headers}    
                                data={e}
                            />
                        </div>
                    )
                    // since we've passed all the headers through first time
                    // we don't need any more loops
                    if (isHeads) break;
                }
                return <div>{collection}</div>

            case 'navbar':
                for (let e of Object.entries(this.props.data)) {
                    let link = `${this.props.baseHttpUrl}/${e[1]}`
                    collection.push(
                        <span class='nav-item-box'>
                            <a  class='nav-item' 
                                href={link}>{e[0].toUpperCase()}</a> 
                        </span>)
                };
                return <div id='nav-bar'>{collection}</div>    
        }
    }
}

export const InputBox = props =>  {
    return (
        <input
            type='text'
            id={props.id} 
            className={props.className}
            placeholder={props.place}
            disabled={props.disabled}
            defaultValue={props.value}
            onKeyUp={props.onKeyUp}
        />
    )
};

export const NotesBox = props =>  {
    return (
        <textarea
            type='text'
            id={props.id} 
            className={props.className}
            placeholder={props.placeholder}
            maxLength={props.maxlength}
            defaultValue={props.value}
        />
    )
};

export const Btn = props => {
    return (
        <button 
            id={props.id}
            className={props.className}
            onClick={props.submit}
            disabled={props.disabled}
            >
            {props.txt}
        </button>
    )
}

export const DropDown = props => {
    let i = 0;
    let items = []
    for (let item of props.items) {
        items.push(
            <option key={i++} 
                    className='opt-item' 
                    value={item}>
                    {item}
            </option>
        )
    }
    let cName = func.concatClassName('select-box', props.className);
    return (
        <select 
            id={props.id}
            className={cName}
            onChange={props.onChange}
            >{items}
        </select>
    )
}

export const CheckBox = props => {
    if ( props.checked == true || props.checked == 'true') {
        return (
            <span>
            <label className={props.classNameLabel}>Done =></label>
            <input
                className={props.className}
                type='checkbox' 
                checked={true}
                onChange={props.handle}
            />
             </span>
        )  
    } else { 
        return (
            <span>
            <label className={props.classNameLabel}>Done =></label>
            <input 
                className={props.className}
                type='checkbox' 
                checked={false}
                onChange={props.handle}
            />
            </span>
        )
    }
}

export const Label = props => {
    let cName = func.concatClassName('form-label', props.className);
    return (
        <label  className={cName} htmlFor={props.id}>
            {props.label}
        </label>
    )
}