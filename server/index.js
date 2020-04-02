/* eslint-disable prefer-template */
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');

const port = 3001;
const app = express();

// eslint-disable-next-line prefer-template
// eslint-disable-next-line no-path-concat
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/neighborhoods', (req, res) => {
  db.getThisNeighborhoodData(req.query.name)
    .then((results) => res.status(200).json(results))
    .catch((err) => {
      throw err;
    });
});

app.get('/api/houses', (req, res) => {
  if (req.query.name) {
    db.getAllNeighborhoodHouses(req.query.name)
      .then((results) => res.status(200).json(results))
      .catch((err) => {
        throw err;
      });
  } else if (req.query.houseId) {
    db.getHeartData(req.query.houseId)
      .then((results) => res.status(200).json(results))
      .catch((err) => {
        throw err;
      });
  } else {
    db.getAllHouseData()
      .then((results) => res.status(200).json(results))
      .catch((err) => {
        throw err;
      });
  }
});

app.get('/api/houses', (req, res) => {
  db.getAllHouseData()
    .then((results) => res.status(200).json(results))
    .catch((err) => {
      throw err;
    });
});

app.put('/api/houses', (req, res) => {
  db.updateHeart(req.body.params.houseId)
    .then((results) => res.status(200).json(results))
    .catch((err) => {
      throw err;
    });
});



// you dont want any verb on api address
// REST doesn't want to see any verb

// GET
app.get('/api/properties/:id', (req, res) => {
  db.getPropertyData(req.params.id)
    .then((results) => res.status(200).json(results))
    .catch((err) => {
      throw err;
    });
});

// DELETE
app.delete('/api/properties/:id', (req, res) => {
  db.deletePropertyData(req.params.id)
    .then((results) => res.status(200).json(results))
    .catch((err) => {
      throw err;
    });
});

// UPDATE
app.put('/api/properties/:num/:id', (req, res) => {
  db.updatePropertyData(req.params.num, req.params.id)
    .then((results) => res.status(200).json(results))
    .catch((err) => {
      throw err;
    });
});

// CREATE
app.post('/api/properties/:num/', (req, res) => {
  db.createPropertyData(req.params.num)
    .then((results) => res.status(200).json(results))
    .catch((err) => {
      throw err;
    });
});

// /api/houses/:id
// app.put('/api/updatehouse', db.updateHouseData);

// image -> url
// /api/houses
// app.post('/api/createhouse', db.createPropertyData);



app.listen(port, () => {
  console.log(`listening on port ${port}`);
});


// 200 201 202
// 200 just general
// 201 successfully created

// what data needs to be requested