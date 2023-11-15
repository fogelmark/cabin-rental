import LoginModal from '../login/LoginModal'
import '../../assets/styles/components/_nav.scss'
import logo from '../../assets/images/nn_main_logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {

  const [_, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(state => !state)
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/">
          <img className='nav-logo' src={logo} alt="a logo of a house and the name of the website" />
        </Link>
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> */}
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