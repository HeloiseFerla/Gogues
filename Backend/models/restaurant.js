const { db } = require('../conf');

const findMany = async () => db.query('SELECT * FROM restaurants');

module.exports = { findMany };
