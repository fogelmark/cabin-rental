import { UseFormRegister, FieldErrors } from 'react-hook-form'
import { FormData } from '../../types/formtypes'

type PaymentProps = {
  register: UseFormRegister<FormData>
  errors: FieldErrors<FormData>;
}

const PaymentMethods = ({ register, errors }: PaymentProps) => {
  return (
    <div>
      <label>Payment Method</label>
      <div>
        <input type="radio" id="visa_mc" value="visa_mc" {...register('payment', { required: 'You need to choose a payment method' })} />
        <label htmlFor="visa_mc">Visa/Mastercard</label>
      </div>
      <div>
        <input type="radio" id="klarna" value="klarna" {...register('payment', { required: 'You need to choose a payment method' })} />
        <label htmlFor="klarna">Klarna</label>
      </div>
      <div>
        <input type="radio" id="paypal" value="paypal" {...register('payment', { required: 'You need to choose a payment method' })} />
        <label htmlFor="paypal">Paypal</label>
      </div>
      <div>
        <input type="radio" id="amex" value="amex" {...register('payment', { required: 'You need to choose a payment method' })} />
        <label htmlFor="amex">Amex</label>
      </div>
      {errors.payment && <span>{errors.payment.message}</span>}
    </div>
  )
}

export default PaymentMethods