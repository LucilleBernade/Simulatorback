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

articlesRouter.post('/', async (req, res) => {
  const [{insertId: id}] = await artcilesModel.insertArticle(req.body);
  res.status(201).json({
    id,
    ...req.body
  });
});

articlesRouter.delete('/:id', async (req, res) => {
  await articlesModel.deleteArticle(req.params.id);
  res.status(204).json();
});

articlesRouter.put('/:id', async (req, res) => {
  await articlesModel.updateArticle(req.body, req.params.id);
  res.status(204).json();
});

module.exports = articlesRouter;