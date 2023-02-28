import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login, store } from '../store'
import { getLogin } from '../data';
import { useState , useEffect} from 'react';

let identitifiants =  {
  "email": 'tony@stark.com',
  "password": 'password123'
}

function Login(){
    const state = store.getState()
    console.log(state)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState(0);

    function handleSubmit(e){
      e.preventDefault()
      getLogin({"email": email, "password": password}).then((promise) => {
        setLoginStatus(promise.status)
      })
    }
    
    if (loginStatus === 200){
      store.dispatch({type: 'login'})
    }

    return(
        <main className="main bg-dark">
          <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button">Sign In</button>
          </form>
      </section>
    </main>
    )
}

export default Login