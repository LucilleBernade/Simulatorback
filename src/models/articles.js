const connexion = require('../connexion');

const findAll = () => connexion.promise().query('SELECT * FROM articles');

module.export = {
  findAll,
};