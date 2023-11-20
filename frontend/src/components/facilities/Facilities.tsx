import { MdBalcony } from "react-icons/md";
import { IoIosBed } from "react-icons/io";
import { PiTelevision } from "react-icons/pi";
import { GiWashingMachine, GiTowel } from "react-icons/gi";
import { GrLounge } from "react-icons/gr";
import { FaWifi, FaParking, FaChargingStation, FaBath, FaPaw } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";

const Facilities = () => {
  return (
    <div className="facilities-container">
      <h3>Facilities</h3>
      <div className="icon-grid">
        <div>
          <FaChargingStation className="icon" />
          <p>Vehicle charging</p>
        </div>
        <div>
          <FaPaw className="icon" />
          <p>Pets allowed</p>
        </div>
        <div>
          <FaKitchenSet className="icon" />
          <p>Kitchen utilities</p>
        </div>
        <div>
          <FaWifi className="icon" />
          <p>Free Wifi</p>
        </div>
        <div>
          <IoIosBed className="icon" />
          <p>King Size Bed</p>
        </div>
        <div>
          <FaParking className="icon" />
          <p>Private parking</p>
        </div>
        <div>
          <MdBalcony className="icon" />
          <p>Private deck</p>
        </div>
        <div>
          <GrLounge className="icon" />
          <p>Lounge</p>
        </div>
        <div>
          <PiTelevision className="icon" />
          <p>TV</p>
        </div>
        <div>
          <GiTowel className="icon" />
          <p>Towels</p>
        </div>
        <div>
          <GiWashingMachine className="icon" />
          <p>Washing machine</p>
        </div>
        <div>
          <FaBath className="icon" />
          <p>Bathtub</p>
        </div>
      </div>
    </div>
  )
}

export default Facilities