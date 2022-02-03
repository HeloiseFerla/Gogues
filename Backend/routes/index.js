const restaurantsRouter = require('./restaurants');
const citiesRouter = require('./cities');
const authRouter = require('./auth');
const usersRouter = require('./users');
const pswdRouter = require('./forgotPswd');

const setupRoutes = (app) => {
  app.use('/restaurants', restaurantsRouter);
  app.use('/users', usersRouter);
  app.use('/cities', citiesRouter);
  app.use('/auth', authRouter);
  app.use('/pswd', pswdRouter);
};

module.exports = {
  setupRoutes,
};
