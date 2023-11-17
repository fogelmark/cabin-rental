import { useState } from "react"
import Calendar from "../components/calendar/Calendar"
import PackageDropDown from "../components/packagedropdown/PackageDropDown"
import { useNavigate } from "react-router-dom"
import '../assets/styles/layouts/_home.scss';
import '../assets/styles/components/_searchwidget.scss'
import '../assets/styles/components/_packageinfocard.scss'
import '../assets/styles/components/_infocard.scss'
import '../assets/styles/components/_carousel.scss'
import '../assets/styles/components/_reviewcard.scss'
import PackageInfoCard from "../components/cards/rentals/PackageInfoCard";
import InfoCard from "../components/cards/testimonials/InfoCard";
import Carousel from "../components/carousel/Carousel";
import ReviewCard from "../components/cards/testimonials/ReviewCard";

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
      <div className='frontpage-wrapper'>
        <h2>Tailored Retreats for Every Budget</h2>
        <PackageInfoCard />
        <InfoCard />
        <h2>Explore our activities</h2>
        <Carousel />
        <h2>Discover Memorable Retreat Experiences</h2>
        <ReviewCard />
      </div>
    </>
  )
}

export default Home