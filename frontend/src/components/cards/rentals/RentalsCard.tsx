

import { Link } from 'react-router-dom'
// import { useRentalsContext } from '../../../context/rentalContext'

const RentalsCard = ({ rental }: RentalsCardProps) => {

  // const { loading } = useRentalsContext()

  // console.log(rental);

  return (
    <div>
      <div>{rental.name}</div>
      <div>{rental.desc}</div>
      <div>{rental.imageURL}</div>
      <div>{rental.package}</div>
      <div>{rental.price}</div>
      <div>
        <Link to={`/rentals/${rental.slug}`}>
          <button>View Deal</button>
        </Link>
      </div>
    </div>
  )
}

export default RentalsCard