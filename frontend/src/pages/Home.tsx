import { useState } from "react"
import Calendar from "../components/calendar/Calendar"
import PackageDropDown from "../components/packagedropdown/PackageDropDown"
import { useNavigate, useLocation } from "react-router-dom"
import '../assets/styles/layouts/_home.scss';
import '../assets/styles/components/_searchwidget.scss'
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  const navigate = useNavigate()

  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const [selectedPackage, setSelectedPackage] = useState('all')

  const handlePackageSelect = (pack: string) => {
    setSelectedPackage(pack)
  }

  const handleSearch = () => {
    navigate(`/rentals/packages/${selectedPackage}`)
  }


  return (
    <>
      <div className='hero'>
        <div className='header'>
          <div className="headline-container">
            <h1 className='headline'>Explore our luxury &</h1><br />
            <h1 className="headline">romantic cabins for couples</h1>
          </div>
          <div className='cabin-search-widget'>
            <PackageDropDown selectedPackage={selectedPackage} onSelectedPackage={handlePackageSelect} />
            <button className='btn btn-widget' onClick={handleSearch}>SEARCH</button>
            <div className="search-icon">
              <i className="fa-solid fa-magnifying-glass" onClick={handleSearch}></i>
            </div>
            <Calendar />
          </div>
        </div>
      </div>
      <div className="box-container">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </>
  )
}

export default Home