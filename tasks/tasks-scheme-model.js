const db = require('../data/db-config.js');

module.exports = {
    findTasks,
    findTasksById,
    add
}

function findTasks() {
      return db('tasks as t')
      .join('projects as p', 't.id', '=', 'p.id')
      .select('t.id', 't.description', 't.notes', 't.completed', 'p.name as project_name', 'p.description as project_description')
        .then(tasks => {
        const convert = []
  
        tasks.forEach(inTask => {
          inTask.completed === 1 ? inTask.completed = true : inTask.completed = false
          convert.push(inTask)
        })
  
        return convert
      })
}

function findTasksById(id) {
    return db('tasks')
    .where({ id })
    .first()
    .then(task => {
        task.completed === 1 ? task.completed = true : task.completed = false
        return task
      })
}

function add(task) {
    return db('tasks').insert(task, 'id');
}