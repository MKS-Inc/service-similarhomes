const mongoose = require('mongoose');

const { Schema } = mongoose;

const Property = new Schema(
  {
    id: { type: Number, unique: true },
    neighborhood: { type: String },
    homeCost: { type: Number },
    bedrooms: { type: Number },
    bathrooms: { type: Number },
    homeAddress: { type: String },
    homeImage: { type: String },
  },
);

module.exports = mongoose.model('properties', Property);
