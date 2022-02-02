const apiRouter = require('express').Router();
const articlesRouter = require('./articles');

apiRouter.use('/articles', articlesRouter);

module.exports = apiRouter;