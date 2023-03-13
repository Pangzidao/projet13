import logo from '../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logIn, logOut, store } from '../store'


function LogInLink() {
  return(
    <Link className="main-nav-link" to="/login">
    <i className="fa fa-user-circle"></i>
    <p>Sign in</p>
  </Link>
  )
}
  

  function LogOutLink(){
    const dispatch = useDispatch()

    return (
        <Link className="main-nav-link" to="/" onClick={() => dispatch({type: "logout"})} >
            <i className="fa fa-user-circle"></i>
            <p>Sign out</p>
        </Link>
    )
  }


function Header() {

  const logginState = useSelector(state => state.logged)

    return (
        <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {logginState? <LogOutLink /> : <LogInLink />}
        </div>
      </nav>
    </header>
    )
}

export default Header