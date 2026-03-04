const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'mysecretpassword',
  database: 'monedas',
  allowExitOnIdle: true,
});

module.exports = { pool };
