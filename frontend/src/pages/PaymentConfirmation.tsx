import { useParams } from "react-router-dom"
import { useBookingsContext } from "../context/bookingContext"
import { useEffect, useState } from 'react'
import '../assets/styles/layouts/_paymentconfirmation.scss'
import axios from "axios"


const PaymentConfirmation = () => {

  const [image, setImage] = useState()
  const { fetchBookingById, bookings } = useBookingsContext()
  const { id } = useParams()

  const rentalId = bookings?.rentalId

  useEffect(() => {
    if (id) {
      fetchBookingById(id)
    }
  }, [])

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await axios.get(`http://localhost:7070/api/rentals/${rentalId}`)
        setImage(res.data.imageURL)
        console.log(image);
      } catch (error) {
        console.log('Error fetching image');
      }
    }

    fetchImage()
  }, [])

  return (
    <div className='payment-confirmation-wrapper'>
      <div className='sub-wrapper'>
        <p className='payment-title'>Payment Confirmation</p>
        <div className='payment-confirmation-container'>
          <p>THANK YOU FOR YOUR PAYMENT!</p>
          <p>Total amount:</p>
          <p>{bookings?.totalPrice}</p>
          <p>Your booking reference:</p>
          <p>{bookings?.reference}</p>
          <p>
            A receipt and booking reference for
            this order has been sent to this email:
          </p>
          <p>{bookings?.email}</p>
        </div>
      </div>
      <div className='payment-image-container'>
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default PaymentConfirmation