import logo from '../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { store } from '../store'

function LogIndicator() {
  const userIsLogged = useSelector((state) => state.login)
  console.log(userIsLogged)

  return(
    <p>{userIsLogged? "Sign Out" : "Sign In" }</p>
  )
 
}

function Header() {
  
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
          
        <Link className="main-nav-link" to="/login">
          <i className="fa fa-user-circle"></i>
          <LogIndicator />        
        </Link>
        </div>
      </nav>
    </header>
    )
}

export default Header