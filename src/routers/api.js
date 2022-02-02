const apiRouter = require('express').Router();
const articlesRouter = require('./articles');
const vehiclesRouter = require('./vehicles');
const regionsRouter = require('./regions');

apiRouter.use('/articles', articlesRouter);
apiRouter.use('/vehicles', vehiclesRouter);
apiRouter.use('/regions', regionsRouter);

module.exports = apiRouter;