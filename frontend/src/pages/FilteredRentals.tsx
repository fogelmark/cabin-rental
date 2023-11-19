import { useParams } from "react-router-dom";
import { useRentalsContext } from "../context/rentalContext";
import RentalsCard from "../components/cards/rentals/RentalsCard";
import "../assets/styles/components/_rentalcard.scss";
import '../assets/styles/layouts/_filteredrentals.scss';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const FilteredRentals = () => {
  const { rentals, loading } = useRentalsContext();
  const { pack } = useParams();

  if (loading) {
    return <Skeleton height={330} width={330} />;
  }

  const filteredRentals =
    pack === "all"
      ? rentals
      : rentals.filter((rental) => rental.package === pack);

  return (
    <div className='filteredrentals-wrapper'>
      {filteredRentals.map((rental, index) => (
        <RentalsCard key={index} rental={rental} />
      ))}
    </div>
  );
};

export default FilteredRentals;
