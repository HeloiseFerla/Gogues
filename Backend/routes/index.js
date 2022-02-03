const restaurantsRouter = require('./restaurants');
const citiesRouter = require('./cities');
const authRouter = require('./auth');
const usersRouter = require('./users');

const setupRoutes = (app) => {
  app.use('/restaurants', restaurantsRouter);
  app.use('/users', usersRouter);
  app.use('/cities', citiesRouter);
  app.use('/auth', authRouter);
};

module.exports = {
  setupRoutes,
};
