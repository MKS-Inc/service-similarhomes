const mongoose = require('mongoose');
const faker = require('faker');

mongoose
  .connect('mongodb://127.0.0.1:27017/properties', { useNewUrlParser: true})
  .catch((e) => {
    console.error('Connection error', e.message);
  });

const mongodb = mongoose.connection;

const propertiesCollection = mongodb.collection('properties');

const properties = [];

for (let i = 0; i < 1; i++) {
  const id = faker.random.number({ min: 1, max: 100 });
  const neighborhood = faker.address.city();
  const homeCost = faker.random.number({ min: 800000, max: 1500000 });
  const bedrooms = faker.random.number({ min: 1, max: 5 });
  const bathrooms = faker.random.number({ min: 1, max: 5 });
  const homeAddress = faker.address.streetAddress();
  const homeImage = faker.image.city();

  const newProperties = {
    id,
    neighborhood,
    homeCost,
    bedrooms,
    bathrooms,
    homeAddress,
    homeImage,
  };
  properties.push(newProperties);
}
propertiesCollection.insertMany(properties);

module.exports = mongodb;
