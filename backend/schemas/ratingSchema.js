const mongoose = require('mongoose');
const date = require('date-and-time')
const { Schema } = mongoose;

const ratingSchema = new Schema({
  productId:  { type: mongoose.Types.ObjectId, ref: 'Product' },
  userId:     { type: mongoose.Types.ObjectId, ref: 'User' },
  rating:     { type: Number, required: true},
  comment:    { type: String },
  created_at: { type: String },
  updated_at: { type: String }
});

ratingSchema.pre('save', function (next) {
  const now = new Date();
  this.updated_at = date.format(now, 'YYYY-MM-DD HH:mm');
  if (!this.created_at) {
    this.created_at = date.format(now, 'YYYY-MM-DD HH:mm');
  }
  next();
});

ratingSchema.pre('findOneAndUpdate', function (next) {
  const now = new Date();
  this._update.updated_at = date.format(now, 'YYYY-MM-DD HH:mm');
  next();
});

const Rating = mongoose.model('Rating', ratingSchema)

module.exports = Rating
