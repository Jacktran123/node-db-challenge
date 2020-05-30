// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './Project.db3'
    },
    useNullAsDefault: true,
    migrations:{
      filename: './migrations'
    },
    seed: {
      filename: './seeds'
    },
    pool: {
        afterCreate: (conn, done) => {
          // runs after a connection is made to the sqlite engine
          conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
        },
    }
  }
}