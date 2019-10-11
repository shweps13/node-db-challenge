const db = require('../data/db-config.js');

module.exports = {
    findProjects,
    findProjectsById,
    findRes,
    add
}

function findProjects() {
    return db('projects')
    .then(projects => {
        const convert = []
  
        projects.forEach(inProject => {
          inProject.completed === 1 ? inProject.completed = true : inProject.completed = false
          convert.push(inProject)
        })
  
        return convert
      });
}

function findProjectsById(id) {
    return db('projects')
    .where({ id })
    .first()
    .then(project => {
        project.completed === 1 ? project.completed = true : project.completed = false
        return project
      })
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