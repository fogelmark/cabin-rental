import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"
import { useRentalsContext } from "../context/rentalContext"
import { Link } from 'react-router-dom'

type Reservation = {
  checkIn: string
  checkOut: string
  totalPrice: number
}

const RentalsDetails = () => {

  const { slug } = useParams()
  const { loading, setLoading } = useRentalsContext()
  const LOCAL_STORAGE_KEY = 'RESERVATION'
  const [rental, setRental] = useState<Rentals | null>(null)
  const [reservation, setReservation] = useState<Reservation | null>(null)
  const [totalPrice, setTotalPrice] = useState(0)

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
        console.log(newTotalPrice);
    }
  }, [reservation, rental]);


  const handleReservation = () => {
    const existingReservationData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{}');

    const reservationData: Reservation = {
      checkIn: existingReservationData.checkIn,
      checkOut: existingReservationData.checkOut,
      totalPrice: totalPrice,
    };

    console.log(totalPrice);

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(reservationData));

    setReservation(reservationData);
  };



  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div>{rental?.name}</div>
      <div>{rental?.desc}</div>
      <div>{rental?.package}</div>
      <div>{rental?.price}</div>

      <div>
        Check-in: {reservation?.checkIn}
        <br />
        Check-out: {reservation?.checkOut}
        <br />
        Total: {totalPrice}
        <br />
        <Link to={`/confirm-booking`}>
          <button onClick={handleReservation}>Reserve</button>
        </Link>
      </div>
    </>
  )
}

export default RentalsDetails