const express = require('express');

const Schemes = require('./resources-scheme-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Schemes.findResources()
  .then(schemes => {
    res.json(schemes);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get resources' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params

Schemes.findResourceById(id)
.then(schemes => {
  res.json(schemes);
})
.catch(err => {
  res.status(500).json({ message: 'Failed to get resource' });
});
});


module.exports = router;