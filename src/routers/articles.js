const tracksRouter = require('express').Router();

tracksRouter.get('/', async (req, res) => {
    const [articles] = await tracksModel.findAll();
    res.json(articles);
  });

module.exports = tracksRouter;