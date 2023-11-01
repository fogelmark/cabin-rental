import { useState } from "react"
import Calendar from "../components/calendar/Calendar"
import PackageDropDown from "../components/packagedropdown/PackageDropDown"
import { Link } from "react-router-dom"

const Home = () => {

  const [selectedPackage, setSelectedPackage] = useState('all')

  const handlePackageSelect = (pack: string) => {
    setSelectedPackage(pack)
    console.log(pack);
  }


  return (
    <div>
      <div className='header-container'>
        <div className='cabin-search-widget'>
          <Calendar />
          <PackageDropDown selectedPackage={selectedPackage} onSelectedPackage={handlePackageSelect} />
          <Link to={`/rentals/packages/${selectedPackage}`}>
            <button>Search</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home