import kitchen_budget from '../../assets/images/cabins/kitchen-budget.jpg'
import kitchen_standard from '../../assets/images/cabins/kitchen-standard.jpg'
import kitchen_standard_2 from '../../assets/images/cabins/kitchen-standard-2.jpg'
import kitchen_deluxe from '../../assets/images/cabins/kitchen-deluxe.jpg'
import bedroom_budget from '../../assets/images/cabins/bedroom-budget.jpg'
import bedroom_standard from '../../assets/images/cabins/bedroom-standard.jpg'
import bedroom_standard_2 from '../../assets/images/cabins/bedroom-standard-2.jpg'
import bedroom_deluxe from '../../assets/images/cabins/bedroom-deluxe.jpg'
import livingroom_budget from '../../assets/images/cabins/livingroom-budget.jpg'
import livingroom_standard from '../../assets/images/cabins/livingroom-standard.jpg'
import livingroom_standard_2 from '../../assets/images/cabins/livingroom-standard-2.jpg'
import livingroom_deluxe from '../../assets/images/cabins/livingroom-deluxe.jpg'
import bathroom_budget from '../../assets/images/cabins/bathroom-budget.jpg'
import bathroom_standard from '../../assets/images/cabins/bathroom-standard.png'
import bathroom_standard_2 from '../../assets/images/cabins/bathroom-standard-2.jpg'
import bathroom_deluxe from '../../assets/images/cabins/bathroom-deluxe.jpg'
import '../../assets/styles/components/_carouseldetails.scss'

const CarouselDetails = ({ rental }: RentalsCardProps) => {

  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div className="carousel-inner">
        {rental?.slug === 'pinecone-paradise' && (
          <>
            <div className="carousel-item active">
              <img src={kitchen_budget} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={bedroom_budget} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={livingroom_budget} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={bathroom_budget} className="d-block w-100" alt="..." />
            </div>
          </>
        )}
        {rental?.slug === 'lakeside-haven' && (
          <>
            <div className="carousel-item active">
              <img src={kitchen_standard} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={bedroom_standard} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={livingroom_standard} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={bathroom_standard} className="d-block w-100" alt="..." />
            </div>
          </>
        )}
        {rental?.slug === 'elk-haven' && (
          <>
            <div className="carousel-item active">
              <img src={kitchen_standard_2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={bedroom_standard_2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={livingroom_standard_2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={bathroom_standard_2} className="d-block w-100" alt="..." />
            </div>
          </>
        )}
        {rental?.slug === 'hidden-valley-andalucia' && (
          <>
            <div className="carousel-item active">
              <img src={kitchen_deluxe} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={bedroom_deluxe} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={livingroom_deluxe} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={bathroom_deluxe} className="d-block w-100" alt="..." />
            </div>
          </>
        )}

      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default CarouselDetails