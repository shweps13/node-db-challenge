const express = require('express');

const Schemes = require('./project-scheme-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Schemes.findProjects()
  .then(schemes => {
    res.json(schemes);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get schemes' });
  });
});


module.exports = router;