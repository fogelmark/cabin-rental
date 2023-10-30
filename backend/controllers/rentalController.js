const router = require('express').Router()

const rentalModel = require('../models/rentalModel')

router.get('/', rentalModel.getAllRentals)
router.get('/:id', rentalModel.getRentalById)
router.get('/slug/:slug', rentalModel.getRentalBySlug)

router.post('/create', rentalModel.createRental)

router.put('/:id/update', rentalModel.updateRental)

router.delete('/:id/delete', rentalModel.deleteRental)

module.exports = router