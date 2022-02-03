const pswdRouter = require('express').Router();
const { db } = require('../conf');

pswdRouter.post('/', async (req, res) => {
  try {
    const { email } = req.body;
    if (email === '') {
      res.status(400).send('email required');
    }
    else {
      const sql = 'SELECT * from users WHERE email=?';
      const [user] = await db.query(sql, [email]);
      if (!user[0]) {
        res.status(403).send('email not in db');
      }
    }
  }
  catch (err) {
    res.status(400).send(err);
  }
});

module.exports = pswdRouter;
