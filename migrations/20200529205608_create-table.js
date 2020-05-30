
exports.up = function(knex) {
  return knex.schema.createTable('Projects',tbl=>{
      tbl.increments('id')
      tbl.string('Project_Name',250).notNullable()
      tbl.string('Description',250)
      tbl.boolean('Completed').defaultTo(false)
  })
  .createTable('Task', tbl=>{
      tbl.integer('Project_Id')
      .references('Projects.id')
      .unsigned()
      .notNullable()
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      tbl.string('Task',250).notNullable()
      tbl.string('Description',250)
      tbl.boolean('Completed').defaultTo(false)
  })
  .createTable('Resources',tbl=>{
      tbl.increments('id')
      tbl.string('Resource',250).notNullable()
      tbl.string('Description',250) 
  })
  .createTable('Project_Resource',tbl=>{
      tbl.integer('Project_Id')
      .unsigned()
      .notNullable()
      .references('Projects.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      tbl.integer('Resource_Id')
      .unsigned()
      .notNullable()
      .references('Resources.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('Project_Resource')
  .dropTableIfExists('Resources')
  .dropTableIfExists('Task')
  .dropTableIfExists('Projects');
};
