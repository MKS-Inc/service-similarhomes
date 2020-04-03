/* eslint-disable consistent-return */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
const mysql = require('mysql');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1',
  database: 'abode',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the mySQL database');
});

const getThisNeighborhoodData = (neighborhood) => {
  return new Promise((resolve, reject) => {
    const queryStr = `SELECT * FROM neighborhoods WHERE neighborhood = "${neighborhood}"`;
    connection.query(queryStr, (err, result, fields) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

const getAllNeighborhoodData = (neighborhood) => {
  return new Promise((resolve, reject) => {
    const queryStr = 'SELECT * FROM neighborhoods';
    connection.query(queryStr, (err, result, fields) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

// GET
const getAllHouseData = () => {
  return new Promise((resolve, reject) => {
    const queryStr = 'SELECT * FROM houses';
    connection.query(queryStr, (err, result, fields) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

// DELETE
const deleteHouseData = (id) => {
  return new Promise((resolve, reject) => {
    const queryStr = 'DELETE FROM houses WHERE id = ?';
    connection.query(queryStr, id, (err, result, fields) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

// UPDATE
const updateHouseData = (num, id) => {
  return new Promise((resolve, reject) => {
    const queryStr = 'UPDATE houses SET home_cost = ? WHERE id = ?';
    connection.query(queryStr, [num, id], (err, result, fields) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

// CREATE
const createHouseData = (num) => {
  return new Promise((resolve, reject) => {
    const queryStr = 'INSERT INTO houses (neighborhood, home_cost, bedrooms, bathrooms, home_address, sf, home_image, heart_filled) VALUES ("Nob Hill", 100000, 5, 2, "Harrison St.", 1110, ?, 0)';
    connection.query(queryStr, [num + '.jpg'], (err, result, fields) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

const getAllNeighborhoodHouses = (neighborhood) => {
  return new Promise((resolve, reject) => {
    const queryStr = `SELECT * FROM houses WHERE neighborhood = "${neighborhood}"`;
    connection.query(queryStr, (err, result, fields) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

const updateHeart = (houseId) => {
  return new Promise((resolve, reject) => {
    const queryStr = `UPDATE houses SET heart_filled = !heart_filled WHERE id = "${houseId}"`;
    connection.query(queryStr, (err, result, fields) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

const getHeartData = (id) => {
  return new Promise((resolve, reject) => {
    const queryStr = `SELECT heart_filled FROM houses WHERE id = "${id}"`;
    connection.query(queryStr, (err, result, fields) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

// get
const getPropertyData = (id) => {
  return new Promise((resolve, reject) => {
    const queryStr = 'SELECT * FROM properties WHERE id = ?';
    connection.query(queryStr, id, (err, result, fields) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};


// delete
const deletePropertyData = (id) => {
  return new Promise((resolve, reject) => {
    const queryStr = 'DELETE FROM properties WHERE id = ?';
    connection.query(queryStr, id, (err, result, fields) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

// update
const updatePropertyData = (num, id) => {
  return new Promise((resolve, reject) => {
    const queryStr = 'UPDATE properties SET home_image = ? WHERE id = ?';
    connection.query(queryStr, [num + '.jpg', id], (err, result, fields) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

// create
const createPropertyData = (num) => {
  return new Promise((resolve, reject) => {
    const queryStr = 'INSERT INTO properties (home_image) VALUES (?)';
    connection.query(queryStr, [num + '.jpg'], (err, result, fields) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

module.exports = {
  connection,
  getThisNeighborhoodData,
  getAllNeighborhoodData,
  getAllHouseData,
  getAllNeighborhoodHouses,
  updateHeart,
  getHeartData,
  updateHouseData,
  getPropertyData,
  deletePropertyData,
  updatePropertyData,
  createPropertyData,
  deleteHouseData,
  createHouseData,
};
