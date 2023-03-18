import { createStore } from 'redux';

const initialState = {
    logged: false,
    token: "",
    firstName: "",
    lastName: "",
    editingName: false
}

export const logIn = () => ({type:"login"})
export const logOut = () => ({type:"logout"})
export const setFirstName = () => ({type: "setFirstName"})
export const setLastName = () => ({type: "setFamilyName"})
export const editingName = () => ({type: "editingName"})

function reducer(state = initialState, action){
    switch(action.type){
        case "login":
            return {...state, logged: true, token: action.token}
        case "logout":
            return {...state, logged: false, token: "notoken"}
        case "setFirstName":
            return {... state, firstName: action.firstName}
        case "setLastName":
            return {... state, lastName: action.lastName}
        case "editingName":
            return {...state, editingName: !state.editingName}
        default:
            return state
    }

}

const store = createStore(reducer)

store.subscribe(() => {
    console.log(store.getState())
    }
)


export { store }