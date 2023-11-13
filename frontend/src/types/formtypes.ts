export enum PaymentEnum {
  visa_mc = 'visa_mc',
  klarna = 'klarna',
  paypal = 'paypal',
  amex = 'amex',
}

export type FormData = {
  checkIn: string
  checkOut: string
  totalPrice: string
  cancelProt: boolean
  fullName: string
  email: string
  phone: number
  address: string
  postalCode: number
  city: string
  payment: PaymentEnum
}