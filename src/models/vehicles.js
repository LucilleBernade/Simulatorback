const connexion = require('../connexion');

const findVehicle = (type, id_regions) => connexion.promise().query('SELECT * FROM vehicles WHERE type=? AND id_regions=?', [type, id_regions]);

//const findAllTypeVehicles = (type) => connexion.promise().query('SELECT * FROM vehicles ');

//const findVehicle = (type, id_regions) => {
//  let query = 'SELECT * FROM vehicles';
//  const params = [];
//
//  if (type) {
//  query += ` WHERE type=${type}`;
//  }
//
//  if (id_regions) {
//    query += ` WHERE id_region=${id_regions}`;
//    }
//  
//  return connexion.promise().query(query, params);
//};



module.exports = {
  findVehicle,
};