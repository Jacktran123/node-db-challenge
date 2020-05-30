
exports.seed = function(knex) {
  
      return knex('Projects').insert([
        {Project_Name: 'Build an app with React '},
        {Project_Name: 'Build an app with Vue'},
        {Project_Name: 'Build an app with Angular'},

      ]);
};
