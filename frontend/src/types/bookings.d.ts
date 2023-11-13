type Bookings = {
  _id: string
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
  payment: string,
  reference: string
}

type Reservation = {
  checkIn: string
  checkOut: string
  totalPrice: number
}