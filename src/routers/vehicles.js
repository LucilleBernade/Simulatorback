const vehiclesRouter = require('express').Router();
const vehiclesModel = require('../models/vehicles');

vehiclesRouter.get('/', async (req, res) => {
    const [vehicles] = await vehiclesModel.findAllVehicles();
    res.json(vehicles);
  });

module.exports = vehiclesRouter;