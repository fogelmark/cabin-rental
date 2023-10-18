const mongoose = require('mongoose');
const { Schema } = mongoose;

const ratingSchema = new Schema({
  rating: { type: Number, default: 0 }
});

const Rating = mongoose.model('Rating', ratingSchema)

module.exports = Rating
