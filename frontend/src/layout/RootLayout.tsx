import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
// import Navbar from '../components/Navbar/Navbar'

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default RootLayout