const db = require('../data/db-config.js');

module.exports = {
    findResources,
    findResourceById
}

function findResources() {
    return db('resources');
}

function findResourceById(id) {
    return db('resources')
    .where({ id })
    .first()
    .then(res => res);
}