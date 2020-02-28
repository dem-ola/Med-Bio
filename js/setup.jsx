'use strict'

export const params = {
    corpName: 'Med Bio Corp.',
    backendhost: 'http://localhost',
    backendport: 3000,
    frontendport: 8080, // clearly not relevant in production
    localStorageKey: 'medbio',
}

import { Provider } from 'react-redux'

export const endpoints = { 
    // for backend -> expressjs
    // used in front-end jsx scripts to call backend
    // note: duplicated in server.js for expressjs purposes
    // keep in sync
    home: 'home',
    login: 'login',
    logout: 'logout',
    view: 'view',
    genders: 'genders',
    patients: 'patients',
    users: 'users',
    prescribers: 'prescribers',
}

export const routes = { // subject, route -> for components;
    'home':  "html/home.html",
    'login':  "html/login.html",
    'logout':  "html/logout.html",
    'view': "html/view.html",
    'users': "html/users.html",
    'users-add': "html/users_add.html",
    'patients-add': "html/patients_add.html",
    'patients': "html/patients.html",
    'prescribers': "html/prescribers.html",
}

export const navBar = { // subject, route -> for components;
    // note shown in order listed below
    'home': routes['home'],
    'view': routes['view'],
    'users': routes['users'],
    'patients': routes['patients'],
    'prescribers': routes['prescribers'],
    'login':  routes['login'],
    'logout': routes['logout'],
}

export const homeImage = 'home.jpg';

