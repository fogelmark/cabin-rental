const Rental = require('../schemas/rentalSchema')
// const Rating = require('../schemas/ratingSchema')

// CREATE RENTAL
exports.createRental = async (req, res) => {
  try {
    const { name, desc, package, imageURL, price } = req.body

    if (!name || !desc || !package || !imageURL || !price) {
      return res.status(400).json({
        message: 'You need to enter all fields'
      })
    }

    const rental = await Rental.create({name, desc, package, imageURL, price})
    res.status(201).json({
      message: 'Rental created successfully',
      rental
    })
  } catch (error) {
    res.status(500).json({
      message: 'Error when creating rental'
    })
  }
}

// GET ALL RENTALS
exports.getAllRentals = async (req, res) => {
  try {
    const rental = await Rental.find()
    res.status(200).json(rental)
  } catch (error) {
    res.status(500).json({
      message: 'Error when fetching all rentals'
    })
  }
}

//GET RENTAL BY ID
exports.getRentalById = async (req, res) => {
  try {
    const rental = await Rental.findById(req.params.id)
    res.status(200).json(rental)
  } catch (error) {
    res.status(500).json({
      message: 'Error when getting rental by ID'
    })
  }
}

// UPDATE RENTAL
exports.updateRental = async (req, res) => {
  try {
    const rental = await Rental.findByIdAndUpdate(req.params.id, req.body, { new: true })

    if (!rental) {
      return res.status(404).json({
        message: 'Could not update that rental'
      })
    }

    res.status(200).json({
      message: 'Rental updated successfully',
      rental: rental
    })
  } catch (error) {
    res.status(500).json({
      message: 'Error when updating rental'
    })
  }
}

// DELETE RENTAL
exports.deleteRental = async (req, res) => {
  try {
    const rental = await Rental.findByIdAndDelete(req.params.id)

    if (!rental) {
      return res.status(404).json({
        message: 'Could not delete that rental'
      })
    }

    res.status(200).json({
      message: 'Rental deleted successfully'
    })
  } catch (error) {
    res.status(500).json({
      message: 'Error when deleting rental'
    })
  }
}