const db = require('../data/db-config.js');

module.exports = {
    findResources,
    findResourceById,
    add
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

function add(resource) {
    return db('resources').insert(resource, 'id');
}