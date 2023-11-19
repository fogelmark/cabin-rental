const router = require('express').Router()
const auth = require('../authentication/auth')

const ratingModel = require('../models/ratingModel')

router.get('/', ratingModel.getAllRatings)
router.get('/:rentalId', ratingModel.getRatingById)

router.post('/:id/create', auth.verifyToken, ratingModel.addRating)

router.put('/:id/update', auth.verifyToken, ratingModel.updateRating)

router.delete('/:id/delete', ratingModel.deleteRating)

module.exports = router