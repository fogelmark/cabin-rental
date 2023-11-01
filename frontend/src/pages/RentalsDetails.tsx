import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"
import { useRentalsContext } from "../context/rentalContext"


const RentalsDetails = () => {

  const { slug } = useParams()
  const { loading, setLoading } = useRentalsContext()
  const [rental, setRental] = useState<Rentals | null>(null)

  if (loading) {
    return <div>Loading...</div>
  }

  useEffect(() => {
    const fetchRentalDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:7070/api/rentals/slug/${slug}`)
        setRental(res.data)
        setLoading(false)
        console.log(res.data);
      } catch (error) {
        console.log('Error fetching rental by ID', error);
        setLoading(true)
      }
    }

    fetchRentalDetails()
  }, [slug, setLoading])

  return (
    <div>
      <div>{rental?.name}</div>
      <div>{rental?.desc}</div>
      <div>{rental?.package}</div>
      <div>{rental?.price}</div>
    </div>
  )
}

export default RentalsDetails