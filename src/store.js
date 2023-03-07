import { createStore } from 'redux';

const initialState = {
    logged: false
}

export const logIn = () => ({type:"login"})

function reducer(state = initialState, action){
    switch(action.type){
        case "login":
            return {...state, logged: true}
        default:
            return state
    }
}

const store = createStore(reducer, initialState)

export default store