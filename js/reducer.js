'use strict'

/*  Not used
    to be used with Store in store.js but constant errors
    : Hooks can only be used inside a function component 
    when trying to use useContext. Gave same error even inside
    a function component - in login.jsx
*/

const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                posts: action.payload
            };
        case 'ADD_POST':
            return {
                ...state,
                posts: state.posts.concat(action.payload)
            };
        case 'REMOVE_POST':
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload)
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;