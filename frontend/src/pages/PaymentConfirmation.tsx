import { useParams } from "react-router-dom"
import { useBookingsContext } from "../context/bookingContext"
import { useEffect } from 'react'

const PaymentConfirmation = () => {

  const { fetchBookingById, bookings } = useBookingsContext()
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      fetchBookingById(id)
      console.log(bookings);
    }
  }, [])


  // FEATURES:
  // CALC TOTAL PRICE (total price + cancel prot)
  // GENERATE RANDOM BOOKING REFERENCE
  // FETCH BOOKING

  return (
    <div>Thanks for your purchase</div>
  )
}

export default PaymentConfirmation