const Property = require('../models/property-model');

exports.getProperty = async (req, res) => {
  await Property.find({}, (err, properties) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    return res.status(200).json({ success: true, data: properties });
  });
};

exports.deleteProperty = async (id) => {
  const query = { 'id' : id};
  await Property.deleteOne(query, (err, properties) => console.log('Deleted'));
};

// exports.addProperty = async (req, res) => {
//   const query = { homeImage: "http://lorempixel.com/640/480/city"};
//   await Property.insert(query, (err, properties) => res.send('Added'));
// };
