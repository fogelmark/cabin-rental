type Bookings = {
  id: string
  rentalId: string
  userId: string
  checkIn: string
  checkOut: string
  totalPrice: number
  status: string
  cancelProt: boolean,
  fullName: string,
  email: string,
  phone: number,
  address: string,
  postalCode: number,
  city: string,
  paymentMethod: string
}

type Reservation = {
  checkIn: string
  checkOut: string
  totalPrice: number
}