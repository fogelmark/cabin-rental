import React from 'react'

type BookingFormProps = {
  handleChange: (e: any) => void
  formData: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    postalCode: string;
    city: string;
  }
}

const BookingForm = ({ handleChange, formData }: BookingFormProps) => {
  return (
    <div>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input type="text" id="fullName" name='fullName' value={formData.fullName} onChange={handleChange} placeholder="Enter full name" />
      </div>

      <div>
        <label htmlFor="email1">Email</label>
        <input type="email" id="email1" name='email' value={formData.email} onChange={handleChange} placeholder="Enter email" />
      </div>

      <div>
        <label htmlFor="phone">Phone Number</label>
        <input type="text" id="phone" name='phone' value={formData.phone} onChange={handleChange} placeholder="Enter phone number" />
      </div>

      <div>
        <label htmlFor="address">Adress</label>
        <input type="text" id="address" name='address' value={formData.address} onChange={handleChange} placeholder="Enter address" />
      </div>

      <div>
        <label htmlFor="postalcode">Postal Code</label>
        <input type="text" id="postalcode" name='postalCode' value={formData.postalCode} onChange={handleChange} placeholder="Enter postal code" />
      </div>

      <div>
        <label htmlFor="city">City</label>
        <input type="text" id="city" name='city' value={formData.city} onChange={handleChange} placeholder="Enter city" />
      </div>
    </div>
  )
}

export default BookingForm