

const ConfirmBooking = () => {
  return (
    <div>
      <h1>ConfirmBooking</h1>
      <div>Check-in: </div>
      <div>Check-out: </div>
      <div>Chosen Cabin: </div>
      <div>Guests: </div>
      <div>Cabin Package: </div>
      <div>
        Cancellation Protection
        <input type="checkbox" />
        500 SEK
      </div>
      <div>Total: </div>

      <form action="">
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input type="text" id="fullname" placeholder="Enter full name" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter email" />
        </div>

        <div>
          <label htmlFor="phone">Phone Number</label>
          <input type="text" id="phone" placeholder="Enter phone number" />
        </div>

        <div>
          <label htmlFor="adress">Adress</label>
          <input type="text" id="adress" placeholder="Enter adress" />
        </div>

        <div>
          <label htmlFor="postalcode">Postal Code</label>
          <input type="text" id="postalcode" placeholder="Enter postal code" />
        </div>

        <div>
          <label htmlFor="city">City</label>
          <input type="text" id="city" placeholder="Enter city" />
        </div>
      </form>

      <div>
        <h2>Payment Methods:</h2>
        <div>
          <div>
            <input type="radio" id="payment-1" name="payment" value="visa-mastercard" />
            <label htmlFor="payment-1">Visa/MasterCard</label>
          </div>

          <div>
            <input type="radio" id="payment-2" name="payment" value="klarna" />
            <label htmlFor="payment-2">Klarna</label>
          </div>

          <div>
            <input type="radio" id="payment-3" name="payment" value="paypal" />
            <label htmlFor="payment-3">PayPal</label>
          </div>
          <div>
            <input type="radio" id="payment-4" name="payment" value="american" />
            <label htmlFor="payment-4">American Express</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmBooking