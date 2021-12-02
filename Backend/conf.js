const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config(); // loads env
// process.env : global variables injected by Node and represent the state of the system env

const { DB_HOST, DB_PASSWORD, DB_SCHEMA, DB_USER, BACK_PORT } = process.env;

const db = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_SCHEMA,
});
const backPort = parseInt(BACK_PORT, 10);

module.exports = { backPort, db };
