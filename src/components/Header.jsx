import logo from '../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logIn } from '../store'



function LogInLink() {
  return(
    <Link className="main-nav-link" to="/login">
    <i className="fa fa-user-circle"></i>
    <p>Sign in</p>
  </Link>
  )
}
  

  function LogOutLink(){
    return (
        <Link className="main-nav-link" to="/" onClick={useDispatch(logIn())} >
            <i className="fa fa-user-circle"></i>
            <p>Sign out</p>
        </Link>
    )
  }


function Header() {

  const logginState = useSelector(state => state.logged)

  console.log(logginState)

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