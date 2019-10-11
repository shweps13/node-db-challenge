const express = require('express');
const helmet = require('helmet');

const server = express();
const recipesRouter = require('./projects/projects-router.js');

const logger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] Was method "${req.method}" to address "${req.path}"`);
    next();
}

server.use(helmet());
server.use(express.json());
server.use(logger);
server.use('/api/projects', recipesRouter);

server.get('/', (req, res) => {
    const nameInsert = req.teamName ? ` ${req.teamName}` : '';
    const yourData = process.env
    res.send(`
    <h2>Heorhii "Projects" Sprint API</h2>
    <p>Hello ${yourData.USER}</p>
    <p>Welcome ${nameInsert} to the Heorhii Hubs API on port ${yourData.PORT}</p>
    `);
  });


module.exports = server;
