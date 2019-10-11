
exports.seed = function(knex) {
  return knex('projects').insert([
    {name: 'Super project', description: null, completed: false},
    {name: 'New project', description: 'Something important', completed: true},
    {name: 'Some new project again', description: 'Information again', completed: true}
  ]);
};
