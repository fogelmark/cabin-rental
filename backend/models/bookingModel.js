const Booking = require('../schemas/bookingSchema')

// GET ALL BOOKINGS
exports.getAllBookings = async (req, res) => {
  try {
    const booking = await Booking.find()
    res.status(200).json(booking)
  } catch (error) {
    res.status(500).json({
      message: 'Error when fetching bookings'
    })
  }
}

exports.createBooking = async (req, res) => {
  try {
    const { 
      checkIn,
      checkOut, 
      totalPrice,
      cancelProt,
      fullName,
      email,
      phone,
      address,
      postalCode,
      city,
      payment,
    } = req.body
    const { id } = req.params
    const userId = req.userData._id

    const cancelFee = 500
    const finalPrice = cancelProt ? totalPrice + cancelFee : totalPrice

    const booking = await Booking.create({
      rentalId: id,
      userId: userId,
      checkIn: checkIn,
      checkOut: checkOut,
      totalPrice: finalPrice,
      cancelProt: cancelProt,
      fullName: fullName,
      email: email,
      phone: phone,
      address: address,
      postalCode: postalCode,
      city: city,
      payment: payment,
    })
    res.status(201).json({
      message: 'Booking created successfully',
      booking
    })
  } catch (error) {
    res.status(500).json({
      message: 'Error when creating booking',
      error: error.message
    })
  }
}

exports.updateBooking = async (req, res) => {
  try {
    const { id } = req.params

    const booking = await Booking.findByIdAndUpdate(id, req.body, { new: true })
    res.status(200).json({
      message: 'Booking updated successfully',
      booking
    })
  } catch (error) {
    res.status(500).json({
      message: 'Error when updating booking'
    })
  }
}

exports.getBookingById = async (req, res) => {
  try {
    const { id } = req.params

    const booking = await Booking.findById(id)
    res.status(200).json(booking)
  } catch (error) {
    res.status(500).json({
      message: 'Error when trying to find booking'
    })
  }
}

exports.deleteBooking = async (req, res) => {
  try {
    const { id } = req.params

    const booking = await Booking.findByIdAndDelete(id)
    res.status(200).json({
      message: 'Booking successfully deleted',
      booking
    })
  } catch (error) {
    
  }
}