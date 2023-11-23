import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

const RootLayout = () => {

  return (
    <>
      <Navbar />
      <div className='main-body'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default RootLayout