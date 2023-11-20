type Rentals = {
  _id: string
  name: string
  desc: string
  package: string
  imageURL: string
  price: number
  slug: string
  squarems: string
}

type RentalsCardProps = {
  rental: Rentals | null
}