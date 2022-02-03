const restaurantsRouter = require('./restaurants');
const citiesRouter = require('./cities');
const authRouter = require('./auth');

const setupRoutes = (app) => {
  app.use('/restaurants', restaurantsRouter);
  app.use('/cities', citiesRouter);
  app.use('/auth', authRouter);
};

module.exports = {
  setupRoutes,
};
