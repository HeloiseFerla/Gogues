const restaurantsRouter = require('express').Router();
const Restaurant = require('../models/restaurant');

restaurantsRouter.get('/', async (req, res) => {
  try {
    const { city } = req.query;

    const [restaurants] = await Restaurant.findMany(city);
    res.status(200).json(restaurants);
  }
  catch (err) {
    res.status(400).send(err);
  }
});

module.exports = restaurantsRouter;
