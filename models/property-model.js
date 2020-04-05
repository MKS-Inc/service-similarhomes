const mongoose = require('mongoose');

const { Schema } = mongoose;

const Property = new Schema(
  {
    id: { type: Number, unique: true },
    neighborhood: {
      id: { type: Number, unique: true },
      neighborhood: { type: String },
      transit_score: { type: Number },
      walk_score: { type: Number },
      value_inc_dec_past: { type: Number },
      value_inc_dec_future: { type: Number },
      median_value: { type: Number },
    },
    homeCost: { type: Number },
    bedrooms: { type: Number },
    bathrooms: { type: Number },
    homeAddress: { type: String },
    homeImage: { type: String },
  },
);

module.exports = mongoose.model('properties', Property);
