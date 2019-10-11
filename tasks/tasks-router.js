const express = require('express');

const Schemes = require('./tasks-scheme-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Schemes.findTasks()
  .then(schemes => {
    res.json(schemes);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get tasks' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params

Schemes.findTasksById(id)
.then(schemes => {
  res.json(schemes);
})
.catch(err => {
  res.status(500).json({ message: 'Failed to get task' });
});
});

router.post('/', (req, res) => {
  const taskData = req.body;

  Schemes.add(taskData)
  .then(scheme => {
    res.status(201).json(scheme);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new task' });
  });
});

module.exports = router;