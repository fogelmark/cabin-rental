import { useParams } from 'react-router-dom';
import RentalsCard from '../components/cards/rentals/RentalsCard';
import { useRentalsContext } from '../context/rentalContext';

const FilteredRentals = () => {
  const { rentals, loading } = useRentalsContext();
  const { pack } = useParams(); // Use the 'pack' variable to capture the package parameter

  if (loading) {
    return <div>Loading...</div>;
  }

  // Filter rentals based on the selected package, or display all rentals if "All" is selected
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
