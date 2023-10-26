const mongoose = require('mongoose');
const date = require('date-and-time')
const { Schema } = mongoose

const productSchema = new Schema({
  name:       { type: String, required: true },
  desc:       { type: String, required: true },
  package:    { type: String, required: true },
  imageURL:   { type: String, required: true },
  price:      { type: Number, required: true },
  created_at: { type: String },
  updated_at: { type: String }
});

productSchema.pre('save', function (next) {
  const now = new Date();
  this.updated_at = date.format(now, 'YYYY-MM-DD HH:mm');
  if (!this.created_at) {
    this.created_at = date.format(now, 'YYYY-MM-DD HH:mm');
  }
  next();
});

productSchema.pre('findOneAndUpdate', function (next) {
  const now = new Date();
  this._update.updated_at = date.format(now, 'YYYY-MM-DD HH:mm');
  next();
});

const Product = mongoose.model('Product', productSchema)

module.exports = Product