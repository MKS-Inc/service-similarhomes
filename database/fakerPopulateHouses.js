/* eslint-disable prefer-template */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-loop-func */
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const fs = require('fs');
const faker = require('faker');
const db = require('./index.js');

const streetSuff = [
  'St.',
  'Ave.',
  'Blvd.',
];

const populateHouses = () => {
  db.getAllNeighborhoodData()
    .then(() => {
      const data = new Uint8Array(Buffer.from('Hello Node.js'));
      fs.writeFile('houses.csv', data, () => {});

      const csvWriter = createCsvWriter({
        path: './house.csv',
        header: [
          { id: 'neighborhood', title: 'NAME' },
          { id: 'homeCost', title: 'HOMECOST' },
          { id: 'bedrooms', title: 'BEDROOMS' },
          { id: 'bathrooms', title: 'BATHROOMS' },
          { id: 'homeAddress', title: 'HOMEADDRESS' },
          { id: 'sf', title: 'SF' },
          { id: 'image', title: 'IMAGE' },
        ],
      });

      const records = [];
      for (let i = 0; i < 50; i++) {
        const neighborhood = faker.random.number({ min: 1, max: 100000 });
        const homeCost = Math.round(faker.random.number({ min: 100, max: 10000 })) * 1000;
        const bedrooms = faker.random.number({ min: 3, max: 6 });
        const bathrooms = bedrooms - faker.random.number({ min: 1, max: 2 });
        const homeAddress = faker.address.streetName() + ' ' + streetSuff[Math.floor(Math.random() * streetSuff.length)];
        const sf = bedrooms * faker.random.number({ min: 750, max: 950 });
        const image = faker.random.number({ min: 1, max: 55 }) + '.jpg';

        records.push({
          neighborhood,
          homeCost,
          bedrooms,
          bathrooms,
          homeAddress,
          sf,
          image,
        });
      }
      csvWriter.writeRecords(records)
        .then(() => {
          console.log('Records saved!');
        }).catch((err) => { console.log(err); });
    })
    .catch((err) => {
      throw err;
    });
};

populateHouses();
module.exports = { populateHouses };


// /* eslint-disable prefer-template */
// /* eslint-disable max-len */
// /* eslint-disable no-plusplus */
// /* eslint-disable arrow-body-style */
// /* eslint-disable consistent-return */
// /* eslint-disable no-unused-vars */
// /* eslint-disable no-loop-func */
// const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// const fs = require('fs');
// const faker = require('faker');
// const db = require('./index.js');

// const streetSuff = [
//   'St.',
//   'Rd.',
//   'Ave.',
//   'Ln.',
//   'Pl.',
//   'Ct.',
//   'Terr.',
//   'Blvd.',
//   'Wy.',
//   'Dr.',
// ];

// const csvWriter = createCsvWriter({
//   path: './house.csv',
//   header: [
//     { id: 'neighborhood', title: 'NAME' },
//     { id: 'homeCost', title: 'HOMECOST' },
//     { id: 'bedrooms', title: 'BEDROOMS' },
//     { id: 'bathrooms', title: 'BATHROOMS' },
//     { id: 'homeAddress', title: 'HOMEADDRESS' },
//     { id: 'sf', title: 'SF' },
//     { id: 'image', title: 'IMAGE' },
//   ],
// });

// const populateHouses = () => {
//   db.getAllNeighborhoodData()
//     .then((neighborhoods) => {
//       return new Promise((resolve, reject) => {
//         for (let i = 0; i < 100; i++) {
//           const neighborhood = neighborhoods[Math.floor(Math.random() * neighborhoods.length)];
//           const homeCost = Math.round((Math.floor(neighborhood.median_value * faker.finance.amount(1.10, 1.30, 2))) / 1000) * 1000;
//           const bedrooms = faker.random.number({ min: 3, max: 6 });
//           const bathrooms = bedrooms - faker.random.number({ min: 1, max: 2 });
//           const homeAddress = faker.address.streetName() + ' ' + streetSuff[Math.floor(Math.random() * streetSuff.length)];
//           const sf = bedrooms * faker.random.number({ min: 750, max: 950 });
//           const image = faker.random.number({ min: 1, max: 55 }) + '.jpg';
//           const queryStr = `INSERT INTO houses (neighborhood, home_cost, bedrooms, bathrooms, home_address, sf, home_image) VALUES ("${neighborhood.neighborhood}", ${homeCost}, ${bedrooms}, ${bathrooms}, "${homeAddress}", ${sf}, "${image}")`;
//           db.connection.query(queryStr, (err, result, fields) => {
//             if (err) {
//               return reject(err);
//             }
//             resolve(result);
//           });
//         }
//       });
//     })
//     .catch((err) => {
//       throw err;
//     });
// };

// populateHouses();

// csvWriter.writeRecords(records)
//   .then((then) => {
//     console.log('...done');
//   }).catch((err) => (console.log(err)));
// module.exports = { populateHouses };
