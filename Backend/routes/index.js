const restaurantsRouter = require('./restaurants');

const setupRoutes = (app) => {
  app.use('/restaurants', restaurantsRouter);
};

module.exports = {
  setupRoutes,
};
