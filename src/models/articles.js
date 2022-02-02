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

const insertArticle = ({ name, text }, image, idAdmin) => dataBase.query(
  'INSERT INTO articles (`name`,`text`,`image`,`id_admin`) VALUES (?,?,?,?)',
  [name, text, image, idAdmin],
);

const deleteArticle = (id) => dataBase.query('DELETE FROM articles WHERE id = ?', [id]);

const updateArticle = (data, image, id) => {
  console.log(data, image, id);
  if (image) {
    dataBase.query('UPDATE articles SET ?, image = ? WHERE id = ?', [data, image.path, id]);
  } else {
    dataBase.query('UPDATE articles SET ? WHERE id = ?', [data, id]);
  }
};


module.exports = {
  findAllArticles,
  findOneArticleById,
  insertArticle,
  deleteArticle,
  updateArticle,
};