

type PaymentProps = {
  handleChange: (e: any) => void
}

const PaymentMethods = ({ handleChange }: PaymentProps) => {
  return (
    <div>
      <h2>Payment Methods:</h2>
      <div>
        <div>
          <input onChange={handleChange} type="radio" id="payment-1" name="payment" value="visa/mastercard" />
          <label htmlFor="payment-1">Visa/MasterCard</label>
        </div>

        <div>
          <input onChange={handleChange} type="radio" id="payment-2" name="payment" value="klarna" />
          <label htmlFor="payment-2">Klarna</label>
        </div>

        <div>
          <input onChange={handleChange} type="radio" id="payment-3" name="payment" value="paypal" />
          <label htmlFor="payment-3">PayPal</label>
        </div>
        <div>
          <input onChange={handleChange} type="radio" id="payment-4" name="payment" value="amex" />
          <label htmlFor="payment-4">American Express</label>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethods