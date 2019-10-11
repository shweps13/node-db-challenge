const db = require('../data/db-config.js');

module.exports = {
    findTasks,
    findTasksById
}

function findTasks() {
    return db('tasks');
}

function findTasksById(id) {
    return db('tasks')
    .where({ id })
    .first()
    .then(res => res);
}