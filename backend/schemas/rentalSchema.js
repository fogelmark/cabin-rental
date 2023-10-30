const mongoose = require('mongoose');
const slug = require('slug')
const date = require('date-and-time')
const { Schema } = mongoose

const rentalSchema = new Schema({
  name:       { type: String, required: true },
  desc:       { type: String, required: true },
  package:    { type: String, required: true },
  imageURL:   { type: String, required: true },
  price:      { type: Number, required: true },
  slug:       { type: String, unique: true },
  created_at: { type: String },
  updated_at: { type: String }
});

rentalSchema.pre('save', function (next) {
  const now = new Date();
  this.updated_at = date.format(now, 'YYYY-MM-DD HH:mm');
  if (!this.created_at) {
    this.created_at = date.format(now, 'YYYY-MM-DD HH:mm');
  }

  if (this.isModified('name')) {
    this.slug = slug(this.name, { lower: true });
  }

  next();
});

const Rental = mongoose.model('Rental', rentalSchema)

module.exports = Rental