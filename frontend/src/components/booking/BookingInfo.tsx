import { useState } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { FormData } from '../../types/formtypes'
import '../../assets/styles/components/_bookinginfo.scss'

type BookingInfoProps = {
  register: UseFormRegister<FormData>
  reservation: Reservation | null
  oneRental: Rentals | null
}

const BookingInfo = ({ register, reservation, oneRental }: BookingInfoProps) => {

  const [isCancellationProtected, setIsCancellationProtected] = useState(false);

  const handleCancellationChange = () => {
    setIsCancellationProtected(!isCancellationProtected);
  };

  const calculateTotalPrice = () => {
    let totalPrice = reservation?.totalPrice || 0;
    if (isCancellationProtected) {
      totalPrice += 500;
    }
    return totalPrice;
  };


  return (
    <div className='booking-info-container'>
      <div>
        <p>Check-in</p>
        <p>{reservation?.checkIn}</p>
      </div>
      <div>
        <p>Check-out</p>
        <p>{reservation?.checkOut}</p>
      </div>
      <div>
        <p>Guests</p>
        <p>2</p>
      </div>
      <div>
        <p>Chosen Cabin</p>
        <p>{oneRental?.name}</p>
      </div>
      <div>
        <p>Cabin Package</p>
        <p>{oneRental?.package}</p>
      </div>
      <div>
        <p>Cancellation Protection</p>
        <label htmlFor="check">
          <input onClick={handleCancellationChange} checked={isCancellationProtected} className='form-check-input' {...register('cancelProt')} id='check' type="checkbox" />
          500 SEK
        </label>
      </div>
      <div>
        <p>Total</p>
        <p>{calculateTotalPrice()} SEK</p>
      </div>
    </div>
  )
}

export default BookingInfo