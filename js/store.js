'use strict'

/*  Not used
    to be used with Reducer in reducer.js but constant errors
    : Hooks can only be used inside a function component 
    when trying to use useContext. Gave same error even inside
    a function component - in login.jsx
*/

import {createContext, useReducer} from "react";
import Reducer from './reducer.js'

const initialState = {
    loggedIn: false
};

const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    console.log('store', state)
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;