'use strict'

// react-router
import {
    BrowserRouter as Router,
    Route, Switch
} from "../node_modules/react-router-dom";

// redux
import {store} from './store.js';

import * as glob from './setup.jsx';
import * as dom from "./lib-doms.jsx";
import * as func from "./lib-funcs.js";

import AddPatient from './patients-add.jsx';
import Patients from './patients.jsx';
import Prescribers from './prescribers.jsx';
import Users from './users.jsx';
import AddUser from './users-add.jsx';
import Login from './login.jsx';
import View from './view.jsx';
import Navigation from './navigation.jsx';
import Logout from './logout.jsx';
import Home from './home.jsx';

const Page = dom.Page;
const Header = dom.Header;
const Content = dom.Content;
const Footer = dom.Footer;
const Clock = dom.Clock;

let routes = { // + route: component, page name for frontend -> react-router; 
    "/html/home.html":          [ <Home />, 'Welcome' ],
    "/html/login.html":         [ <Login />, 'Login' ],
    "/html/view.html":          [ <View />, 'View' ],
    "/html/users.html":         [ <Users />, 'Users' ],
    "/html/users_add.html":     [ <AddUser />, 'Add New User'],
    "/html/patients_add.html":  [ <AddPatient />, 'Add New Patient' ],
    "/html/patients.html":      [ <Patients />, 'Patients' ],
    "/html/prescribers.html":   [ <Prescribers />, 'Prescribers' ],
    "/html/logout.html":        [ <Logout />, 'Logout' ],
}

// get route from location and then page name/title
let location = window.location.pathname;
const baseUrl = `${glob.params.backendhost}:${glob.params.backendport}`
let theRoute = location.replace(baseUrl, '');
let pageName = routes[theRoute][1];
let component = routes[theRoute][0];
const navBarLinks = glob.navBar;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.onLogAction = this.onLogAction.bind(this);
        this.state = {
            loggedIn: 'null',
        }
    }

    componentDidMount(){
        let localStore = func.getStore(glob.params.localStorageKey)
        if (localStore) { // not null
            for (let k of Object.keys(this.state)) {
                this.setState({[k]: localStore[k]})  
            }
        }
    }

    onLogAction () {
        // we pass this func as a prop to Login/Logout
        // there: loggedIn status is set up in the redux store
        // then we call the store here
        // we don't update state as React doesn't guarantee immediate updates
        // instead we just update local storage directly
        // then when the new page opens this sorage is called
        // by componentDidMount and state is updated there
        let reduxed = store.getState();
        let localStore = func.getStore(glob.params.localStorageKey)
        for (let k of Object.keys(localStore)) {
            if (Object.keys(reduxed).includes(k)) {
                localStore[k] = reduxed[k];  
            }
        }
        func.setStore(glob.params.localStorageKey, localStore);
    }

    render() {
        return (  
            <Page 
                id='page-wrap'
                header={
                    <Header
                        name = {pageName}
                        time = {<Clock />}
                        nav = {<Navigation
                                    isLoggedIn={this.state.loggedIn} 
                                    links={navBarLinks} />}
                        content = {null}
                    />
                }
                content={
                    <Content
                        content = {
                            <Router>
                            <Switch>
                                <Route exact path='/html/login.html'>
                                    <Login onLogAction={this.onLogAction} />
                                </Route>
                                <Route exact path='/html/logout.html'>
                                    <Logout onLogAction={this.onLogAction} />
                                </Route>
                                <Route path={theRoute}>{component}</Route>
                            </Switch>
                            </Router>   
                        }
                    />
                }
                footer={
                    <Footer
                        content = {null}
                    />
                }
            />
        )
    }
}

ReactDOM.render (
    <App />,
    document.getElementById('root'))