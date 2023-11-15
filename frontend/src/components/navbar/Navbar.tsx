import LoginModal from '../login/LoginModal'
import '../../assets/styles/components/_nav.scss'
import logo from '../../assets/images/nn_main_logo.png'
import { NavLink } from 'react-router-dom'


const Navbar = () => {

  return (
    <div className='nav-container'>
      <NavLink to="/">
        <img className='nav-logo' src={logo}
          alt="a logo of a house and a the name of the website"
        />
      </NavLink>
      <LoginModal />
    </div>
  )
}

export default Navbar