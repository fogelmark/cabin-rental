import { useEffect, useState } from 'react'
import { useRentalsContext } from "../context/rentalContext"
import { useNavigate, useParams } from "react-router-dom"
import { useReservationContext } from '../context/reservationContext'
import { useUserContext } from '../context/userContext'
import axios from 'axios'
import BookingForm from '../components/forms/bookingform/BookingForm'
import PaymentMethods from '../components/payment/PaymentMethods'
import BookingInfo from '../components/booking/BookingInfo'
import { useBookingsContext } from '../context/bookingContext'
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormData } from '../types/formtypes'

const ConfirmBooking = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const { fetchRentalBySlug, oneRental, loading, setLoading } = useRentalsContext()
  const { reservation } = useReservationContext()
  const { setBookings } = useBookingsContext()
  const { user } = useUserContext()
  const { slug } = useParams()
  const navigate = useNavigate()

  const [, setIsSuccess] = useState(false)


  useEffect(() => {
    const fetchData = async () => {
      if (slug && !loading) {
        await fetchRentalBySlug(slug);
        setLoading(true);
      }
    }
    fetchData();
  }, [slug, fetchRentalBySlug, loading]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {

    try {
      console.log("Authorization Token:", user);
      const res = await axios.post(`http://localhost:7070/api/bookings/${oneRental?._id}/create`, {
        ...data,
        checkIn: reservation?.checkIn,
        checkOut: reservation?.checkOut,
        totalPrice: reservation?.totalPrice,
      }, {
        headers: {
          Authorization: `Bearer ${user}`
        }
      });
      const bookingDetails = res.data.booking
      setBookings(bookingDetails)
      setIsSuccess(true)
      if (bookingDetails) {
        navigate(`/payment-confirmation/${bookingDetails._id}`)
      }
    } catch (error) {
      console.log('Something went wrong when trying to confirm booking...', error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>ConfirmBooking</h1>
        <BookingInfo register={register} reservation={reservation} oneRental={oneRental} />
        <BookingForm register={register} errors={errors} />
        <PaymentMethods register={register} errors={errors} />
        <button className='btn btn-primary' type='submit'>Confirm booking</button>
      </form>
    </>
  )
}

export default ConfirmBooking