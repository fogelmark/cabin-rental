const mongoose = require('mongoose')
const date = require('date-and-time')
const { Schema } = mongoose

const bookingSchema = new Schema({
  rentalId:      { type: mongoose.Types.ObjectId, ref: 'Rental' },
  userId:        { type: mongoose.Types.ObjectId, ref: 'User' },
  checkIn:       { type: String },
  checkOut:      { type: String },
  totalPrice:    { type: Number },
  cancelProt:    { type: Boolean },
  fullName:      { type: String, required: true },
  email:         { type: String, required: true },
  phone:         { type: Number, required: true },
  address:       { type: String, required: true },
  postalCode:    { type: Number, required: true },
  city:          { type: String, required: true },
  payment:       { type: String, required: true },
  reference:     { type: String, unique: true },
  created_at:    { type: String },
  updated_at:    { type: String }
})

bookingSchema.pre('save', function (next) {
  const now = new Date();
  this.updated_at = date.format(now, 'YYYY-MM-DD HH:mm');
  if (!this.created_at) {
    this.created_at = date.format(now, 'YYYY-MM-DD HH:mm');
  }

  const timestamp = date.format(now, 'YYYYMMDD');
  const random = Math.floor(Math.random() * 10000);
  this.reference = `BOOKING-${timestamp}-${random}`;

  next();
});

bookingSchema.pre('findOneAndUpdate', function (next) {
  const now = new Date();
  this._update.updated_at = date.format(now, 'YYYY-MM-DD HH:mm');
  next();
});

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking