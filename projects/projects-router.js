const express = require('express');

const Schemes = require('./project-scheme-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Schemes.findProjects()
  .then(schemes => {
    res.json(schemes);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects' });
  });
});

router.get('/tasks', (req, res) => {
  Schemes.findTasks()
  .then(schemes => {
    res.json(schemes);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get tasks' });
  });
});

router.get('/:id/resourse', (req, res) => {
  const { id } = req.params;

  Schemes.findRes(id)
  .then(schemes => {
    res.json(schemes);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get resourse projects' });
  });
});
module.exports = router;