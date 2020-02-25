'use strict'

import * as glob from './setup.jsx';
import * as dom from "./lib-doms.jsx";

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

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "../node_modules/react-router-dom";

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
console.log('base',baseUrl)
console.log('loc',location)
console.log('route',theRoute)
console.log('routes', routes)
let pageName = routes[theRoute][1];
let component = routes[theRoute][0];
const navBarLinks = glob.navBar;
console.log('nav',navBarLinks)

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: null,            
        }
    }

    render() {
        return (  
            <Page 
                id='page-wrap'
                header={
                    <Header
                        name = {pageName} 
                        time = {<Clock />}
                        nav = {<Navigation links={navBarLinks} />}
                        content = {null}
                    />
                }
                content={
                    <Content
                        content = {
                            <Router>
                            <div>
                                <Route path={theRoute}>{component}</Route>
                            </div>
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