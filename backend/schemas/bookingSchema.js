const mongoose = require('mongoose')
const date = require('date-and-time')
const { Schema } = mongoose

const bookingSchema = new Schema({
  rentalId:  { type: mongoose.Types.ObjectId, ref: 'Rental' },
  userId:     { type: mongoose.Types.ObjectId, ref: 'User' },
  checkIn:    { type: String },
  checkOut:   { type: String },
  totalPrice: { type: Number },
  status:     { type: String, default: 'Pending' },
  cancelProt: { type: Boolean },
  created_at: { type: String },
  updated_at: { type: String }
})

bookingSchema.pre('save', function (next) {
  const now = new Date();
  this.updated_at = date.format(now, 'YYYY-MM-DD HH:mm');
  if (!this.created_at) {
    this.created_at = date.format(now, 'YYYY-MM-DD HH:mm');
  }
  next();
});

bookingSchema.pre('findOneAndUpdate', function (next) {
  const now = new Date();
  this._update.updated_at = date.format(now, 'YYYY-MM-DD HH:mm');
  next();
});

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking