import logo from '../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'

function LogIndicator() {

    return (
      <Link className="main-nav-link" to="/login">
        <i className="fa fa-user-circle"></i>
        <p>Sign In</p>
      </Link>
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
          <LogIndicator />
        </div>
      </nav>
    </header>
    )
}

export default Header