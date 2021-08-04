const express = require('express');

const booksRouter = express.Router();

const { createOneBook, getAll, getOne } = require('./controller');

booksRouter.post('/', createOneBook);

booksRouter.get('/', getAll);

booksRouter.get('/:id', getOne);

module.exports = booksRouter;
