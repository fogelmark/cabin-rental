
type BookingInfoProps = {
  handleChange: (e: any) => void
  reservation: Reservation | null
  oneRental: Rentals | null
}

const BookingInfo = ({ handleChange, reservation, oneRental }: BookingInfoProps) => {
  return (
    <div>
      <div>Check-in: {reservation?.checkIn}</div>
      <div>Check-out: {reservation?.checkOut}</div>
      <div>Chosen Cabin: {oneRental?.name}</div>
      <div>Guests: 2</div>
      <div>Cabin Package: {oneRental?.package}</div>
      <div>
        Cancellation Protection
        <input onChange={handleChange} name='checkbox' type="checkbox" />
        500 SEK
      </div>
      <div>Total: {reservation?.totalPrice}</div>
    </div>
  )
}

export default BookingInfo