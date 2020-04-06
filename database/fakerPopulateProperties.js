/* eslint-disable no-plusplus */
/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-loop-func */
const faker = require('faker');
const db = require('./index.js');

const populateProperties = () => {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < 10; i++) {
      const image = faker.random.number({ min: 1, max: 1000000 }) + '.jpg';
      const queryStr = `INSERT INTO properties (home_image) VALUES ("${image}")`;
      db.connection.query(queryStr, (err, result, fields) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    }
  });
};

populateProperties();

module.exports = { populateProperties };
