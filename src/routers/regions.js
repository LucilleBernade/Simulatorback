const regionsRouter = require('express').Router();
const regionsModel = require('../models/regions');

regionsRouter.get('/', async (req, res) => {
    const [regions] = await regionsModel.findAllRegions();
    res.json(regions);
  });

module.exports = regionsRouter;