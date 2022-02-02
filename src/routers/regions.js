const regionsRouter = require('express').Router();
const regionsModel = require('../models/regions');

regionsRouter.get('/', async (req, res) => {
    const [regions] = await regionsModel.findAllRegions(req.query.id_countries);
    res.json(regions);
  });


module.exports = regionsRouter;