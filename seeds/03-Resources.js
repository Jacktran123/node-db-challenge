
exports.seed = function(knex) {
  
      return knex('Resources').insert([
        {Resource: 'online courses'},
        {Resource: 'Documentations'},
        {Resource: 'friends who are an experts'}
      ]);
  
};
