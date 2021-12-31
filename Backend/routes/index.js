const restaurantsRouter = require('./restaurants');
const citiesRouter = require('./cities');

const setupRoutes = (app) => {
  app.use('/restaurants', restaurantsRouter);
  app.use('/cities', citiesRouter);
};

module.exports = {
  setupRoutes,
};
