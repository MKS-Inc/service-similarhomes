const express = require('express');
const PropertyCtrl = require('../controllers/property-ctrl');

const router = express.Router();

router.get('/units', PropertyCtrl.getProperty);

router.get('/units/delete/:id', (req, res) => {
  PropertyCtrl.deleteProperty(req.params.id);
});

module.exports = router;
