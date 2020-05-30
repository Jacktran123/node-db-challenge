
exports.seed = function(knex) {

      return knex('Task').insert([
        {Project_Id : 1, Task: 'Learn the basic of React', Completed: false },
        {Project_Id : 2, Task: 'Learn the basic of Vue', Completed: false },
        {Project_Id : 3, Task: 'Learn the basic of Angular', Completed: false }
      ]);
};
