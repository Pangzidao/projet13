import { createStore } from '@reduxjs/toolkit'

// state
const initialState = {
  login: false
}

// actions creators

export const login = () => ({ type: "login"})

function reducer(state = initialState, action) {
  if (action.type === 'login') {
    return {
      ...state, 
      login: !state.login
    }
  }
  return state
}

export const store = createStore(reducer)


