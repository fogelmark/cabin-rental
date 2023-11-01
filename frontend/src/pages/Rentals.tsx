import RentalsCard from "../components/cards/rentals/RentalsCard";
import { useRentalsContext } from "../context/rentalContext"


const Rentals = () => {

  const { rentals, loading } = useRentalsContext()

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>Rentals</h2>
      {rentals.map((rental, index) => <RentalsCard key={index} rental={rental} />)}
    </div>
  )
}

export default Rentals