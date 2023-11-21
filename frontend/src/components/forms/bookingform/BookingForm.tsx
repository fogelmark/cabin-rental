import { UseFormRegister, FieldErrors } from 'react-hook-form'
import { FormData } from '../../../types/formtypes'
import '../../../assets/styles/components/_bookingform.scss'

type BookingFormProps = {
  register: UseFormRegister<FormData>
  errors: FieldErrors<FormData>;
}

const BookingForm = ({ register, errors }: BookingFormProps) => {
  return (
    <div className='booking-form-container'>
      <div>
        <label>fullname</label>
        <input {...register('fullName', { required: 'full name is required' })} />
        {errors.fullName && <span>{errors.fullName.message}</span>}
      </div>
      <div>
        <label>email</label>
        <input {...register('email', { required: 'email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email address' } })} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <label>phone</label>
        <input {...register('phone', { required: 'phone is required' })} />
        {errors.phone && <span>{errors.phone.message}</span>}
      </div>
      <div>
        <label>address</label>
        <input {...register('address', { required: 'address is required' })} />
        {errors.address && <span>{errors.address.message}</span>}
      </div>
      <div>
        <label>postal code</label>
        <input {...register('postalCode', { required: 'Postal code is required' })} />
        {errors.postalCode && <span>{errors.postalCode.message}</span>}
      </div>
      <div>
        <label>city</label>
        <input {...register('city', { required: 'city is required' })} />
        {errors.city && <span>{errors.city.message}</span>}
      </div>
    </div>
  )
}

export default BookingForm