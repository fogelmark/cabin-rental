import logo from '../../assets/images/nn_main_logo.png'
import '../../assets/styles/components/_footer.scss'

const Footer = () => {
  return (
    <div className='footer-grid'>
      <div className='contact-grid'>
        <h4 className='footer-heading grid-item contact'>Contact us</h4>
        <p className='grid-item contact'>Northernnest Retreats</p>
        <i className="fa-solid fa-location-dot grid-item contact"></i>
        <p className='grid-item contact'>Norrskensvägen 235</p>
        <p className='grid-item contact'>235 00 Åre, Sweden</p>
        <i className="fa-solid fa-phone grid-item contact"></i>
        <p className='grid-item contact'>+46 123 423 024</p>
        <i className="fa-solid fa-envelope grid-item contact"></i>
        <p className='grid-item contact'>contact@northernnest.com</p>
      </div>
      <div className='socials-grid'>
        <h4 className='grid-item socials'>Follow us</h4>
        <div className='grid-item socials'>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-facebook"></i>
        </div>
      </div>
      <div className='newsletter-grid'>
        <h4 className='grid-item newsletter'>Sign up for our newletter</h4>
        <div className="input-group grid-item newsletter">
          <input type="text" className="form-control" placeholder="Enter email" aria-label="Enter email" aria-describedby="button-addon2" />
          <button className="btn btn-light" type="button" id="button-addon2">Subscribe</button>
        </div>
      </div>
      <div className='copyright-grid'>
        <img src={logo} className='grid-item copyright' alt="a logo of a house and a the name of the website" />
        <p className='grid-item copyright'>© . 2023 NorthernNest Retreats. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer