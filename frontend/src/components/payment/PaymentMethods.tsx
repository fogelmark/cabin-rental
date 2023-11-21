import { UseFormRegister, FieldErrors } from 'react-hook-form'
import { FormData } from '../../types/formtypes'
import '../../assets/styles/components/_payment.scss'
import visamc from '../../assets/images/visamc.jpg'
import klarna from '../../assets/images/klarna.jpg'
import paypal from '../../assets/images/paypal.jpg'
import amex from '../../assets/images/amex.jpg'

type PaymentProps = {
  register: UseFormRegister<FormData>
  errors: FieldErrors<FormData>;
}

const PaymentMethods = ({ register, errors }: PaymentProps) => {
  return (
    <div className='payment-container'>
      <p>Payment Method</p>
      <div>
        <input className='form-check-input' type="radio" id="visa_mc" value="visa_mc" {...register('payment', { required: 'You need to choose a payment method' })} />
        <label htmlFor="visa_mc">
          <img src={visamc} />
        </label>
      </div>
      <div>
        <input className='form-check-input' type="radio" id="klarna" value="klarna" {...register('payment', { required: 'You need to choose a payment method' })} />
        <label htmlFor="klarna">
          <img src={klarna} />
        </label>
      </div>
      <div>
        <input className='form-check-input' type="radio" id="paypal" value="paypal" {...register('payment', { required: 'You need to choose a payment method' })} />
        <label htmlFor="paypal">
          <img src={paypal} />
        </label>
      </div>
      <div>
        <input className='form-check-input' type="radio" id="amex" value="amex" {...register('payment', { required: 'You need to choose a payment method' })} />
        <label htmlFor="amex">
          <img src={amex} />
        </label>
      </div>
      {errors.payment && <span>{errors.payment.message}</span>}
    </div>
  )
}

export default PaymentMethods