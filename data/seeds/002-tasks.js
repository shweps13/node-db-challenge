
exports.seed = function(knex) {
  return knex('tasks').insert([
    {description: 'Super project', notes: 'Some note', completed: true},
    {description: 'New project', notes: null, completed: true},
    {description: 'Some new project again', notes: 'Note again', completed: true}
  ]);
};
