const restaurantsRouter = require('express').Router();
const Restaurant = require('../models/restaurant');

restaurantsRouter.get('/', async (req, res) => {
  try {
    const [rows] = await Restaurant.findMany();
    res.status(200).json(rows);
  }
  catch (err) {
    res.status(400).send(err);
  }
});

module.exports = restaurantsRouter;
