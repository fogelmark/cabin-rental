import { useState } from "react"
import Calendar from "../components/calendar/Calendar"
import PackageDropDown from "../components/packagedropdown/PackageDropDown"
import { useNavigate } from "react-router-dom"
import '../assets/styles/layouts/_home.scss';
import '../assets/styles/components/_searchwidget.scss'
import '../assets/styles/components/_homecard.scss'
import InfoCard from "../components/cards/rentals/InfoCard";

const Home = () => {
  const navigate = useNavigate()

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
      <h1>Tailored Retreats for Every Budget</h1>
      <InfoCard />
    </>
  )
}

export default Home