const connexion = require('../connexion');

const findPrice = (type, id_regions) => connexion.promise().query('SELECT * FROM vehicles WHERE type=? AND id_regions=?', [type, id_regions]);
// query pas séparée
module.exports = {
  findPrice,
};