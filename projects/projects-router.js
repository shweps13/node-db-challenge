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

router.get('/:id', (req, res) => {
    const { id } = req.params

  Schemes.findProjectsById(id)
  .then(schemes => {
    res.json(schemes);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get project' });
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

router.post('/', (req, res) => {
    const projectData = req.body;
  
    Schemes.add(projectData)
    .then(scheme => {
      res.status(201).json(scheme);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new project' });
    });
  });

module.exports = router;