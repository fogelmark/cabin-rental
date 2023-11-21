import { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { useRentalsContext } from "../context/rentalContext"
import { useReservationContext } from '../context/reservationContext'
import axios from "axios"
import { useUserContext } from '../context/userContext'
import CarouselDetails from '../components/carousel/CarouselDetails'
import Facilities from '../components/facilities/Facilities'
import '../assets/styles/layouts/_rentaldetails.scss'
import '../assets/styles/components/_facilities.scss'
import '../assets/styles/components/_included.scss'
import '../assets/styles/components/_reviewcardsmall.scss'
import Included from '../components/facilities/Included'
import ReviewCardSmall from '../components/cards/testimonials/ReviewCardSmall'

const RentalsDetails = () => {

  const navigate = useNavigate()

  const { slug } = useParams()
  const { loading, setLoading } = useRentalsContext()
  const { user } = useUserContext()
  const { reservation, setReservation, LOCAL_STORAGE_KEY } = useReservationContext()
  const [rental, setRental] = useState<Rentals | null>(null)
  const [totalPrice, setTotalPrice] = useState(0)
  const [showLoginModal, setShowLoginModal] = useState(false)

  useEffect(() => {
    const fetchRentalDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:7070/api/rentals/slug/${slug}`)
        setRental(res.data)
        setLoading(false)
      } catch (error) {
        console.log('Error fetching rental by ID', error);
        setLoading(true)
      }
    }

    fetchRentalDetails()
  }, [slug, setLoading])

  useEffect(() => {
    const savedDates = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (savedDates) {
      const parsedReservation = JSON.parse(savedDates);
      setReservation(parsedReservation);
    }
  }, [])

  useEffect(() => {
    const calculateTotalPrice = (nights: number, price: number) => {
      return nights * price;
    };

    switch (true) {
      case !(reservation && rental && reservation.checkIn && reservation.checkOut):
        break;
      case isNaN(Number(reservation?.checkIn.slice(0, 2))):
      case isNaN(Number(reservation?.checkOut.slice(0, 2))):
      case isNaN(Number(rental?.price)):
        break;
      default:
        const checkInDateNumber = Number(reservation?.checkIn.slice(0, 2));
        const checkOutDateNumber = Number(reservation?.checkOut.slice(0, 2));
        const nights = checkOutDateNumber - checkInDateNumber;
        const price = Number(rental?.price);
        const newTotalPrice = calculateTotalPrice(nights, price);
        setTotalPrice(newTotalPrice);
    }
  }, [reservation, rental]);


  const handleReservation = () => {

    if (!user) {
      setShowLoginModal(true)
      return
    }

    const existingReservationData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{}');

    const reservationData: Reservation = {
      checkIn: existingReservationData.checkIn,
      checkOut: existingReservationData.checkOut,
      totalPrice: totalPrice,
    };

    navigate(`/confirm-booking/${rental?.slug}`)

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(reservationData));

    setReservation(reservationData);
  };

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className='details-wrapper'>
      <CarouselDetails rental={rental} />
      <Facilities />
      <Included />
      <ReviewCardSmall />
      <div className='sticky-info-container'>
        <div className="info">
          <div className='guests-info'>
            <p>
              {rental?.desc}
            </p>
            <div className='user-count'>
              2x <i className="fa-solid fa-user"></i>
            </div>
          </div>
          <div className='date-info'>Check-in: {reservation?.checkIn}</div>
          <div className='date-info'>Check-out: {reservation?.checkOut}</div>
        </div>
        <div className='button-group'>
          <div className='price-info'>
            <p>Total: </p>
            <p>
              {totalPrice} SEK
            </p>
          </div>
          {user ? (
            <button className='btn btn-reserve' onClick={handleReservation}>RESERVE</button>
          ) : (
            <button className='btn btn-reserve' onClick={handleReservation} data-bs-toggle="modal" data-bs-target="#exampleModal">RESERVE</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default RentalsDetails