import { createStore } from '@reduxjs/toolkit'

// state
const initialState = {
  logged: false
}

// actions creators

export const login = () => ({ type: "login"})



function reducer(state, action) {
  if (action.type === 'login') {
    return {
      ...state, 
      logged: !state.login
    }
  }
  return state
}

export const store = createStore(reducer, initialState)


