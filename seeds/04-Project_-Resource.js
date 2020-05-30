
exports.seed = function(knex) {
  
      return knex('Project_Resource').insert([
        {Project_Id: 1, Resource_Id: 1},
        {Project_Id: 1, Resource_Id: 2},
        {Project_Id: 2, Resource_Id: 2},
        {Project_Id: 2, Resource_Id: 3}
      ]);
};
