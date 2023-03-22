import logo from '../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logIn, logOut, store } from '../store'


function LogInLink() {
  return(
    <Link className="main-nav-link" to="/login">
    <i className="fa fa-user-circle profile-icon"></i>
    <p>Sign in</p>
  </Link>
  )
}
  

  function LogOutLink(){
    const dispatch = useDispatch()

    return (
        <Link className="main-nav-link" to="/" onClick={() => dispatch({type: "logout"})} >
            <i  className="fa-solid fa-right-from-bracket signout-icon"></i>        
            <p>Sign out</p>
        </Link>
    )
  }

  function ProfileLink(){
    const firstName = useSelector(state => state.firstName)
    const logginState = useSelector(state => state.logged)

    return (
      <Link className="main-nav-link" to="/profile" 
      style={logginState? {opacity:"100%"}: {opacity:"0%"}}>
        <i className="fa fa-user-circle profile-icon"></i>
        <p>{firstName}</p>
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
        <div className="pages-nav">
         <ProfileLink />
          {logginState? <LogOutLink /> : <LogInLink />}
        </div>
      </nav>
    </header>
    )
}

export default Header