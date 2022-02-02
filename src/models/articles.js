const connexion = require('../connexion');
const dataBase = connexion.promise();

const findAllArticles = ({ limit, sortBy, orderBy }) => {
    let query = 'SELECT * FROM articles';
    const params = [];
  
    if (sortBy && orderBy) {
      query += ` ORDER BY ${sortBy} ${orderBy}`;
    }
  
    if (limit) {
      query += ' LIMIT ?';
      params.push(parseInt(limit, 10));
    }
    return dataBase.query(query, params);
  };

const findOneArticleById = (id) => dataBase.query('SELECT * FROM articles WHERE id = ?', [id]);

module.exports = {
  findAllArticles,
  findOneArticleById
};