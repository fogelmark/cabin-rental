type Bookings = {
  id: string
  rentalId: string
  userId: string
  checkIn: string
  checkOut: string
  totalPrice: number
  status: string
  cancelProt: boolean
}

type Reservation = {
  checkIn: string
  checkOut: string
  totalPrice: number
}