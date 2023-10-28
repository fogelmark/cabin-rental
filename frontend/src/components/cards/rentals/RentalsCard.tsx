import React from 'react'
import { useRentalsContext } from '../../../context/rentalContext'

const RentalsCard = ({ rental }: RentalsCardProps) => {

  const { loading } = useRentalsContext()

  return (
    <div>
      <div>{rental.name}</div>
      <div>{rental.desc}</div>
      <div>{rental.imageURL}</div>
      <div>{rental.package}</div>
      <div>{rental.price}</div>
    </div>
  )
}

export default RentalsCard