const vehiclesRouter = require('express').Router();
const vehiclesModel = require('../models/vehicles');

vehiclesRouter.get('/', async (req, res) => {
    const [price] = await vehiclesModel.findPrice(req.query.type, req.query.id_regions);
    res.json(price);
  });

module.exports = vehiclesRouter;