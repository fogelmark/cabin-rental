import { MdOutdoorGrill } from "react-icons/md";
import { IoIosBed } from "react-icons/io";
import { PiTelevision } from "react-icons/pi";

const PackageInfoCard = () => {
  return (
    <div className="package-info-card-container">
      <div className="package-info-card">
        <div className='info-image budget'>
        </div>
        <h4>BUDGET</h4>
        <div className='info-text'>Experience a memorable getaway without breaking the bank with our budget-friendly cabin rental package. Unwind in the midst of nature, surrounded by the peaceful ambiance of the outdoors, making it an ideal escape for the budget-conscious traveler.</div>
        <div className='info-icons'>
          <i className="fa-solid fa-wifi"></i>
          <MdOutdoorGrill size={30} />
          <IoIosBed size={30} />
        </div>
      </div>
      <div className="package-info-card">
        <div className='info-image standard'>
        </div>
        <h4>STANDARD</h4>
        <div className='info-text'>Indulge in a comfortable and well-rounded cabin rental experience with our standard package. This package is designed to offer a blend of convenience, amenities, and activities, ensuring a delightful stay for all types of travelers.</div>
        <div className='info-icons'>
          <i className="fa-solid fa-wifi"></i>
          <MdOutdoorGrill size={30} />
          <IoIosBed size={30} />
          <PiTelevision size={30} />
        </div>
      </div>
      <div className="package-info-card">
        <div className='info-image deluxe'>
        </div>
        <div className='info-headline'>
          <h4>DELUXE</h4>
        </div>
        <div className='info-text'>Escape to the lap of luxury in our deluxe cabin rental package. Experience the perfect blend of rustic charm and modern comfort amidst natural surroundings. This package is curated for those seeking an exceptional retreat filled with relaxation and adventure.</div>
        <div className='info-icons'>
          <i className="fa-solid fa-wifi"></i>
          <MdOutdoorGrill size={30} />
          <IoIosBed size={30} />
          <i className="fa-solid fa-person-swimming"></i>
          <i className="fa-solid fa-hot-tub-person"></i>
          <PiTelevision size={30} />
        </div>
      </div>
    </div>
  )
}

export default PackageInfoCard