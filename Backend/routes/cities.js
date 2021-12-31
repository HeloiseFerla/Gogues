const citiesRouter = require('express').Router();
const Cities = require('../models/city');

citiesRouter.get('/', async (req, res) => {
  try {
    const [cities] = await Cities.findMany();
    res.status(200).json(cities);
  }
  catch (err) {
    res.status(400).send(err);
  }
});

citiesRouter.get('/:name', async (req, res) => {
  try {
    const [cities] = await Cities.findOne(req.params.name);
    res.status(200).json(cities);
  }
  catch (err) {
    res.status(400).send(err);
  }
});

module.exports = citiesRouter;
