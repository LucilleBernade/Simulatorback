const articlesRouter = require('express').Router();
const articlesModel = require('../models/articles');

articlesRouter.get('/', async (req, res) => {
    const [articles] = await articlesModel.findAllArticles(req.query);
    res.json(articles);
  });

articlesRouter.get('/:id', async (req, res) => {
    const [[name]] = await articlesModel.findOneArticleById(req.params.id);
    if (name) {
      res.json(name);
    } else {
      res.status(404).json();
    }
  });

module.exports = articlesRouter;