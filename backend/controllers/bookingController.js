const router = require('express').Router()

const auth = require('../authentication/auth')

const bookingModel = require('../models/bookingModel')

router.get('/', bookingModel.getAllBookings)
router.get('/:id', bookingModel.getBookingById)

router.post('/:id/create', auth.verifyToken, bookingModel.createBooking)

router.put('/:id/update', bookingModel.updateBooking)

router.delete('/:id/delete', bookingModel.deleteBooking)


module.exports = router
