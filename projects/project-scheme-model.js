const db = require('../data/db-config.js');

module.exports = {
    findProjects,
    findProjectsById,
    findRes,
    add,
    findByIdStretch
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

// ========

function findProjectsTasks(id) {
    return db('tasks')
      .select('id', 'description', 'notes', 'completed')
      .where({ id: id })
      .then(tasks => {
        const convert = []
  
        tasks.forEach(task => {
          task.completed === 1 ? task.completed = true : task.completed = false
          convert.push(task)
        })
  
        return convert
      })
}

function findProjResources(id) {
    return db('projects as p')
    .join('resources as r', 'p.id' , '=', 'r.project_id')
    .select('r.project_id', 'r.name', 'r.description')
    .where({ project_id: id })
    .then(resources => resources);
  }

  function findByIdStretch(id) {
    const tasks = findProjectsTasks(id)
    const resources = findProjResources(id)
  
    return db('projects')
      .where({ id })
      .first()
      .then(proj => {
        proj.completed === 1 ? proj.completed = true : proj.completed = false
  
        proj.tasks = tasks._rejectionHandler0
        proj.resources = resources._rejectionHandler0
  
        return proj
      })
  }