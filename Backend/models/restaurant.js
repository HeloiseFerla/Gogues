const { db } = require('../conf');

const findMany = async (city) => {
  const sql = 'SELECT * FROM restaurants WHERE city LIKE ?';
  const sqlValue = city;

  return db.query(sql, sqlValue);
};

module.exports = { findMany };
