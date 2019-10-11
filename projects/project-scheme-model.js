const db = require('../data/db-config.js');

module.exports = {
    findProjects,
    findProjectsById,
    findRes,
    add
}

function findProjects() {
    return db('projects');
}

function findProjectsById(id) {
    return db('projects')
    .where({ id })
    .first()
    .then(res => res);
}

function findRes(stepID) {
    return db('projects as p')
    .join('resources as r', 'p.id' , '=', 'r.project_id')
    .select('r.project_id', 'r.name', 'r.description')
    .where({ project_id: stepID });
}

function add(project) {
    return db('projects').insert(project, 'id');
}