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

const ConfirmBooking = () => {

  const { fetchRentalBySlug, oneRental, loading, setLoading } = useRentalsContext()
  const { reservation, LOCAL_STORAGE_KEY } = useReservationContext()
  const { fetchBookingById, setBookings, bookings } = useBookingsContext()
  const { user } = useUserContext()
  const { slug } = useParams()
  const navigate = useNavigate()

  const initState = {
    checkIn: reservation?.checkIn,
    checkOut: reservation?.checkOut,
    totalPrice: reservation?.totalPrice,
    cancelProt: false,
    fullName: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
    city: '',
    paymentMethod: null
  }

  const [formData, setFormData] = useState(initState)
  const [isSuccess, setIsSuccess] = useState(false)


  useEffect(() => {
    const fetchData = async () => {
      if (slug && !loading) {
        await fetchRentalBySlug(slug);
        setLoading(true);
      }
    }

    const reservationData = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (reservationData) {
      try {
        const parsedReservationData = JSON.parse(reservationData);
        setFormData((prevState) => ({
          ...prevState,
          ...parsedReservationData,
        }));
      } catch (error) {
        console.error('Error parsing reservation data:', error);
      }
    }



    fetchData();
  }, [slug, fetchRentalBySlug, loading]);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;

    switch (name) {
      case 'payment':
        if (type === 'radio') {
          setFormData((prevState) => ({
            ...prevState,
            paymentMethod: value,
          }));
        }
        break;

      case 'checkbox':
        if (type === 'checkbox') {
          setFormData(prevState => ({
            ...prevState,
            cancelProt: checked
          }))
        }
        break;

      default:
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
    setIsSuccess(false);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      const res = await axios.post(`http://localhost:7070/api/bookings/${oneRental?._id}/create`, formData, {
        headers: {
          Authorization: `Bearer ${user}`
        }
      })
      const bookingDetails = res.data.booking
      setFormData(initState)
      setIsSuccess(true)
      setBookings(bookingDetails)
      console.log(bookings);
      console.log('booking confirmed!', formData);
      navigate(`/payment-confirmation/${bookingDetails._id}`)
      // if (isSuccess) {
      // }
    } catch (error) {
      console.log('Error adding product', error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>ConfirmBooking</h1>
        <BookingInfo handleChange={handleChange} reservation={reservation} oneRental={oneRental} />
        <BookingForm handleChange={handleChange} formData={formData} />
        <PaymentMethods handleChange={handleChange} />
        <button className='btn btn-primary' type='submit'>Confirm booking</button>
      </form>
    </>
  )
}

export default ConfirmBooking