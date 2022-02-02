const apiRouter = require('express').Router();
const articlesRouter = require('./articles');
const vehiclesRouter = require('./vehicles');
const regionsRouter = require('./regions');
const usersRouter = require('./user');

apiRouter.use('/articles', articlesRouter);
apiRouter.use('/vehicles', vehiclesRouter);
apiRouter.use('/regions', regionsRouter);
apiRouter.use('/user', usersRouter);

module.exports = apiRouter;