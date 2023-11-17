import LoginModal from '../login/LoginModal'
import '../../assets/styles/components/_nav.scss'
import logo from '../../assets/images/nn_main_logo.png'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

  const location = useLocation()
  const isHomePage = location.pathname === '/'
  console.log(isHomePage);

  const [_, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(state => !state)
  }

  return (
    <nav className={`navbar ${isHomePage ? 'nav-transparent' : 'nav-standard'} navbar-expand-lg`}>
      <div className="container-fluid">
        <Link to="/">
          <img className={`nav-logo  ${isHomePage ? 'logo-large' : 'logo-small'}`} src={logo} alt="a logo of a house and the name of the website" />
        </Link>
        <div data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <input type="checkbox" id="checkbox" onClick={handleToggle} />
          <label htmlFor="checkbox" className="toggle">
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
          </label>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <LoginModal />
            </li>
            {/* <li className="nav-item">
              Register
            </li> */}
            <i className="fa-solid fa-circle-user ms-auto"></i>
          </ul>
        </div>
      </div>
    </nav>
  )

}

export default Navbar