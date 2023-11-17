import user_1 from '../../../assets/images/user-1.png'
import user_2 from '../../../assets/images/user-2.png'
import user_3 from '../../../assets/images/user-3.png'

const ReviewCard = () => {
  return (
    <div className='review-card-container'>
      <div className='review-card'>
        <img src={user_1} alt="" />
        <p>Kerstin</p>
        <div>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <p>"Our cabin retreat was pure magic! Nestled in nature, we enjoyed breathtaking views and a cozy, well-equipped space. From invigorating hikes to thrilling skiing days, every moment was picture-perfect. Can't wait to return for more cherished memories!"</p>
      </div>
      <div className='review-card'>
        <img src={user_2} alt="" />
        <p>John</p>
        <div>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <p>"Our charming cabin exceeded all expectations! Tucked away in the wilderness, we explored snowy landscapes by day and cozied up by the fireplace at night. A perfect retreat for nature lovers and adventure seekers!"</p>
      </div>
      <div className='review-card'>
        <img src={user_3} alt="" />
        <p>Petter</p>
        <div>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <p>"Our cabin getaway was a dream come true. Surrounded by pristine wilderness, we enjoyed invigorating hikes and starry nights on the porch. The proximity to ski slopes added an extra layer of excitement to our unforgettable winter escape. Already planning our next visit!"</p>
      </div>
    </div>
  )
}

export default ReviewCard