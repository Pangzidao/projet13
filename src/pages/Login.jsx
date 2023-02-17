import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../store'


function Login(){

    const dispatch = useDispatch()

    return(
        <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <div>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label
            ><input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label
            ><input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
              >Remember me</label
            >
          </div>
          <button className="sign-in-button"
                  onClick={() => {
                    dispatch(login())
                    }
                  
                  }
          
          >Sign In</button>
          <Link className="main-nav-link" to="/profile">
           go to profile         
        </Link>
        </div>
      </section>
    </main>
    )
}

export default Login