import { useParams } from 'react-router-dom';
import RentalsCard from '../components/cards/rentals/RentalsCard';
import { useRentalsContext } from '../context/rentalContext';

const FilteredRentals = () => {
  const { rentals, loading } = useRentalsContext();
  const { pack } = useParams();

  if (loading) {
    return <div>Loading...</div>;
  }

  const filteredRentals = pack === 'all' ? rentals : rentals.filter((rental) => rental.package === pack);

  return (
    <div>
      <h2>{`${pack} Rentals`}</h2>
      {filteredRentals.map((rental, index) => (
        <RentalsCard key={index} rental={rental} />
      ))}
    </div>
  );
};

export default FilteredRentals;
