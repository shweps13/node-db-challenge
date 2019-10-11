const db = require('../data/db-config.js');

module.exports = {
    findProjects,
    findTasks,
    findRes
}

function findProjects() {
    return db('projects');
}

function findTasks() {
    return db('tasks');
}

function findRes(stepID) {
    return db('projects as p')
    .join('resources as r', 'p.id' , '=', 'r.project_id')
    .select('r.project_id', 'r.name', 'r.description')
    .where({ project_id: stepID });
}
