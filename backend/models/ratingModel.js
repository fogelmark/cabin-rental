const Rating = require('../schemas/ratingSchema')

// ADD RATING
exports.addRating = async (req, res) => {
  try {
    const { rating, comment } = req.body
    const { id } = req.params
    const userId = req.userData._id
    
    const newRating = await Rating.create({
      rentalId: id,
      userId: userId,
      rating: rating,
      comment: comment
    })
    res.status(201).json({
      message: 'Rating added successfully',
      rating: newRating
    })
  } catch (error) {
    res.status(500).json({
      message: 'Error when adding rating'
    })
  }
}

// UPDATE RATING
exports.updateRating = async (req, res) => {
  try {
    const { id } = req.params

    const rating = await Rating.findByIdAndUpdate(id, req.body, { new: true })

    if (!rating) {
      return res.status(404).json({
        message: 'Could not update the rating'
      })
    }

    res.status(200).json({
      message: 'Rating updated successfully',
      rating: rating
    })
  } catch (error) {
    res.status(500).json({
      message: 'Error when updating rating'
    })
  }
}

// GET RATING BY ID
exports.getRatingById = async (req, res) => {
  try {
    const { id } = req.params
    const rating = await Rating.findById(id)
    res.status(200).json(rating)
  } catch (error) {
    res.status(500).json({
      message: 'Error when getting rating by ID'
    })
  }
}

// GET ALL RATINGS
exports.getAllRatings = async (req, res) => {
  try {
    const rating = await Rating.find()
    res.status(200).json(rating)
  } catch (error) {
    res.status(500).json({
      message: 'Error when fetching all ratings'
    })
  }
}

// DELETE RATING
exports.deleteRating = async (req, res) => {
  try {
    const { id } = req.params

    const rating = await Rating.findByIdAndDelete(id)

    res.status(200).json({
      message: 'Rating successfully deleted',
      rating
    })
  } catch (error) {
    res.status(500).json({
      message: 'Error when deleting rating'
    })
  }
}