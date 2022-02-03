const usersRouter = require('express').Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const { jwtSecret } = require('../conf');
const { db } = require('../conf');

usersRouter.put('/:id', passport.authenticate('jwt'),
  async (req, res) => {
    try {
      const { id } = req.params;
      const {
        email, firstname, lastname, cityId, title, city,
      } = req.body;
      const sql = 'UPDATE users SET email=?, firstname=?, lastname=?, cityId=?, title=? WHERE id=?';
      await db.query(sql, [email, firstname, lastname, cityId, title, id]);
      const user = {
        email, firstname, lastname, cityId, title, city,
      };
      const token = jwt.sign(user, jwtSecret);
      res.status(200).json({ user, token });
    }
    catch (err) {
      res.status(400).send(err);
    }
  });

module.exports = usersRouter;
