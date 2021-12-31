const { db } = require('../conf');

const findMany = async (city) => {
  const sql = 'SELECT restaurants.name,restaurants.lat, restaurants.lon FROM restaurants inner join cities on cityId=cities.id WHERE cities.name LIKE ?';
  const sqlValue = city;

  return db.query(sql, sqlValue);
};

module.exports = { findMany };
