const db = require('../data/db-config.js');

module.exports = {
    findProjects
}

function findProjects() {
    return db('projects');
}

