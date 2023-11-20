import { useParams } from "react-router-dom"
import { useBookingsContext } from "../context/bookingContext"
import { useEffect } from 'react'

const PaymentConfirmation = () => {

  const { fetchBookingById, bookings } = useBookingsContext()
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      fetchBookingById(id)
    }
  }, [])

  return (
    <>
      <div>THANK YOU FOR YOUR PAYMENT!</div>
      <div>Total amount:</div>
      <div>{bookings?.totalPrice}</div>
      <div>Your booking reference:</div>
      <div>{bookings?.reference}</div>
      <div>
        A receipt and booking reference for
        this order has been sent to this email:
      </div>
      <div>{bookings?.email}</div>
    </>
  )
}

export default PaymentConfirmation