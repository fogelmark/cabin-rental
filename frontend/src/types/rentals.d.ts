type Rentals = {
  _id: string
  name: string
  desc: string
  package: string
  imageURL: string
  price: number
  slug: string
}

type RentalsCardProps = {
  rental: Rentals
}