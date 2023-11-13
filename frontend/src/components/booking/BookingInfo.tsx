import { UseFormRegister } from 'react-hook-form'
import { FormData } from '../../types/formtypes'

type BookingInfoProps = {
  register: UseFormRegister<FormData>
  reservation: Reservation | null
  oneRental: Rentals | null
}

const BookingInfo = ({ register, reservation, oneRental }: BookingInfoProps) => {
  return (
    <div>
      <div>Check-in: {reservation?.checkIn}</div>
      <div>Check-out: {reservation?.checkOut}</div>
      <div>Chosen Cabin: {oneRental?.name}</div>
      <div>Guests: 2</div>
      <div>Cabin Package: {oneRental?.package}</div>
      <div>
        Cancellation Protection
        <input {...register('cancelProt')} type="checkbox" />
        500 SEK
      </div>
      <div>Total: {reservation?.totalPrice}</div>
    </div>
  )
}

export default BookingInfo