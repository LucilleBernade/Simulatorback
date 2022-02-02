const connexion = require('../connexion');

const findAllVehicles = () => connexion.promise().query('SELECT * FROM vehicles');

const findPrice = (type, id_regions) => connexion.promise().query('SELECT price FROM vehicles WHERE type=? AND id_regions=?', [type, id_regions]);

module.exports = {
  findAllVehicles,
  findPrice,
};