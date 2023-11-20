import { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import user_1 from '../../../assets/images/user-1.png'
import user_2 from '../../../assets/images/user-2.png'
import user_3 from '../../../assets/images/user-3.png'

const ReviewCardSmall = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`review-container`}>
      <h3>Reviews</h3>
      <div className="border-div">
        <div onClick={toggleAccordion} className={`review-grid ${isOpen ? 'open' : ''}`}>
          <div className='review'>
            <img src={user_1} />
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <div className='review-text'>
              Charming cabin, stunning views – a perfect retreat!
            </div>
          </div>
          <div className='review'>
            <img src={user_2} />
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <div className='review-text'>
              Quaint cabin, serene surroundings – an ideal getaway!
            </div>
          </div>
          <div className='review'>
            <img src={user_3} />
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <div className='review-text'>
              Our cabin stay was pure magic – peaceful, picturesque, and exactly what we needed.
            </div>
          </div>
        </div>
        <div onClick={toggleAccordion} className='expandable'>
          {isOpen ? (
            <>
              <p>Show less</p>
              <FaChevronDown className='chevron up' style={{ color: '#486349' }} />
            </>
          ) : (
            <>
              <p>Show more</p>
              <FaChevronDown className='chevron' style={{ color: '#486349' }} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ReviewCardSmall