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

enum PaymentEnum {
  visa_mc = 'visa_mc',
  klarna = 'klarna',
  paypal = 'paypal',
  amex = 'amex',
}

type FormData = {
  checkIn: string
  checkOut: string
  totalPrice: string
  cancelProt: boolean
  fullName: string
  email: string
  phone: number
  address: string
  postalCode: number
  city: string
  payment: PaymentEnum
}


const ConfirmBookingTwo = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const { fetchRentalBySlug, oneRental, loading, setLoading } = useRentalsContext()
  const { reservation } = useReservationContext()
  const { setBookings } = useBookingsContext()
  const { user } = useUserContext()
  const { slug } = useParams()
  const navigate = useNavigate()

  const [isSuccess, setIsSuccess] = useState(false)


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
      setIsSuccess(true)
      setBookings(bookingDetails)
      if (bookingDetails) {
        navigate(`/payment-confirmation/${bookingDetails._id}`)
      }
    } catch (error) {
      console.log('Error adding product', error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>ConfirmBooking</h1>
        {/* <BookingInfo handleChange={handleChange} reservation={reservation} oneRental={oneRental} /> */}
        {/* <BookingForm handleChange={handleChange} formData={formData} /> */}

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
        <div>
          <label>fullname</label>
          <input {...register('fullName', { required: 'Full name is required' })} />
          {errors.fullName && <span>{errors.fullName.message}</span>}
        </div>
        <div>
          <label>email</label>
          <input {...register('email', { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email address' } })} />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label>phone</label>
          <input {...register('phone', { required: 'Phone is required' })} />
          {errors.phone && <span>{errors.phone.message}</span>}
        </div>
        <div>
          <label>address</label>
          <input {...register('address', { required: 'address is required' })} />
          {errors.address && <span>{errors.address.message}</span>}
        </div>
        <div>
          <label>postal code</label>
          <input {...register('postalCode', { required: 'postalCode is required' })} />
          {errors.postalCode && <span>{errors.postalCode.message}</span>}
        </div>
        <div>
          <label>city</label>
          <input {...register('city', { required: 'city is required' })} />
          {errors.city && <span>{errors.city.message}</span>}
        </div>
        <div>
          <label>Payment Method</label>
          <select {...register('payment')}>
            <option value="visa_mc">visa/mastercard</option>
            <option value="klarna">klarna</option>
            <option value="paypal">paypal</option>
            <option value="amex">amex</option>
          </select>
        </div>

        {/* <PaymentMethods handleChange={handleChange} /> */}
        <button className='btn btn-primary' type='submit'>Confirm booking</button>
      </form>
    </>
  )
}

export default ConfirmBookingTwo