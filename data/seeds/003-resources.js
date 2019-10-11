
exports.seed = function(knex) {
  return knex('resources').insert([
    {project_id: 1, name: 'Lambda Student', description: 'a soon to be hired developer', task_id: 1},
    {project_id: 1, name: 'MacBook Pro #1', description: 'an overly expensive laptop computer', task_id: 2},
    {project_id: 2, name: 'MacBook Pro #1', description: 'an overly expensive laptop computer', task_id: 2},
    {project_id: 2, name: 'Something important', description: null, task_id: 3},
    {project_id: 3, name: 'Something important', description: null, task_id: 3}
  ]);
};
