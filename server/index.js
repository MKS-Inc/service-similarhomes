/* eslint-disable prefer-template */
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const mongodb = require('../mongoDB');

const port = 3001;
const app = express();

// eslint-disable-next-line prefer-template
// eslint-disable-next-line no-path-concat
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongodb.on('error', console.error.bind(console, 'MongoDB connection error:'));
const propertyRouter = require('../routes/property-router');

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

// GET
app.get('/api/houses', (req, res) => {
  db.getAllHouseData()
    .then((results) => res.status(200).json(results))
    .catch((err) => {
      throw err;
    });
});

// DELETE
app.delete('/api/houses/:id', (req, res) => {
  db.deleteHouseData(req.params.id)
    .then((results) => res.status(200).json(results))
    .catch((err) => {
      throw err;
    });
});

// UPDATE
app.put('/api/houses/:num/:id', (req, res) => {
  db.updateHouseData(req.params.num, req.params.id)
    .then((results) => res.status(200).json(results))
    .catch((err) => {
      throw err;
    });
});

// CREATE
app.post('/api/houses/:num/', (req, res) => {
  db.createHouseData(req.params.num)
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

app.use('/api', propertyRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
