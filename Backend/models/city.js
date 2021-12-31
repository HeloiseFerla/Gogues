const { db } = require('../conf');

const findMany = async () => {
  const sql = 'SELECT * FROM cities ';

  return db.query(sql);
};

const findOne = async (name) => {
  const sql = 'SELECT * FROM cities WHERE name = ?';

  return db.query(sql, name);
};

module.exports = { findMany, findOne };
