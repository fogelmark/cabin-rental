import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useRentalsContext } from "../../../context/rentalContext";
// import budgetCabin from '../../../assets/images/cabins/cabin-budget-1.png';
// import standardCabin from '../../../assets/images/info-standard.png';



const RentalsCard = ({ rental }: RentalsCardProps) => {

  // const imageMap = {
  //   'budget': budgetCabin,
  //   'standard': standardCabin
  // }

  // const hasImage = imageMap.hasOwnProperty(rental.package)

  const [rating, setRating] = useState<Ratings | null>(null)

  const { loading } = useRentalsContext()

  useEffect(() => {
    const fetchRating = async () => {
      try {
        const res = await axios.get(`http://localhost:7070/api/ratings/${rental?._id}`)
        setRating(res.data)
      } catch (error) {
        console.log('Error', error);
      }
    }

    fetchRating()
  }, [])

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/rentals/${rental?.slug}`);
  };

  const renderStars = () => {
    const filledStars = rating?.rating || 0;
    const totalStars = 5;

    return Array.from({ length: totalStars }, (_, index) => (
      <i
        key={index}
        className={`fa-solid fa-star ${index < filledStars ? '' : 'unfilled'}`}
      ></i>
    ));
  };

  return (
    <div className="rental-card-container">
      <div className="rental-card">
        <div className="image-container">
          <img className="rental-image" src={rental?.imageURL} />
          {/* {loading ? (<Skeleton height={330} width={330} />) : ()} */}
          {/* {hasImage && (
            <img src={imageMap.standard} alt="" />
          )} */}
        </div>
        <div className='like-icon'>
          <i className="fa-regular fa-heart"></i>
        </div>
        <div className='rental-package'>{rental?.package}</div>
        <div className='rental-price'>{rental?.price} SEK per night</div>
        <div className='sub-container'>
          <div className='rental-name'>{rental?.name}</div>
          <div className='meter-room-group'>
            <div className='rental-squarems'>{rental?.squarems}</div>
            -
            <div className='rental-desc'>{rental?.desc}</div>
          </div>
          <div className='rating-button-group'>
            <div className="rental-rating">{renderStars()}</div>
            <div>
              <button className='button-deal' onClick={handleClick}>View deal</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalsCard;
