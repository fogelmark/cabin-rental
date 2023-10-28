type Bookings = {
  id: string
  name: string
  desc: string
  package: string
  imageURL: string
  price: number
}

type RentalsCardProps = {
  rental: Bookings
}