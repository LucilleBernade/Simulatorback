const connexion = require('../connexion');

const findAllRegions = (id_countries) => connexion.promise().query('SELECT * FROM regions WHERE id_countries=?', [id_countries]);

module.exports = {
  findAllRegions,
};