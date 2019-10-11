const db = require('../data/db-config.js');

module.exports = {
    findTasks,
    findTasksById,
    add
}

function findTasks() {
    return db('tasks')
    .then(tasks => {
        const convert = []
  
        tasks.forEach(inTask => {
          inTask.completed === 1 ? inTask.completed = true : inTask.completed = false
          convert.push(inTask)
        })
  
        return convert
      });
}

function findTasksById(id) {
    return db('tasks')
    .where({ id })
    .first()
    .then(res => res);
}

function add(task) {
    return db('tasks').insert(task, 'id');
}