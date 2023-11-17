import carousel_1 from '../../assets/images/carousel-1.png'
import carousel_2 from '../../assets/images/carousel-2.png'
import carousel_3 from '../../assets/images/carousel-3.png'
import carousel_4 from '../../assets/images/carousel-4.png'
import carousel_5 from '../../assets/images/carousel-5.png'

const Carousel = () => {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={carousel_1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={carousel_2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={carousel_3} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={carousel_4} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={carousel_5} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel