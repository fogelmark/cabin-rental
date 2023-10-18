const mongoose = require('mongoose');
const ratingSchema = require('./ratingSchema');
const { Schema } = mongoose

const productSchema = new Schema({
  name:     { type: String, required: true },
  desc:     { type: String, required: true },
  package:  { type: String, required: true },
  imageURL: { type: String, required: true },
  price:    { type: Number, required: true },
  ratings: [
    {
      sumOfRatings: { type: Number, default: 0 },
      totalCount:   { type: Number, default: 0 },
      meanRating:   { type: Number }
    }
  ]
});

const Product = mongoose.model('Product', productSchema)

module.exports = Product