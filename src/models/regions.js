const connexion = require('../connexion');

const findAllRegions = () => connexion.promise().query('SELECT * FROM regions');

module.exports = {
  findAllRegions,
};