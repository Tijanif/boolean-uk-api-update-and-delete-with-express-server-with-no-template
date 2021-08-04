const express = require('express');

const booksRouter = express.Router();

const { createOneBook, getAll, getOne, updateBook } = require('./controller');

booksRouter.post('/', createOneBook);

booksRouter.get('/', getAll);

booksRouter.get('/:id', getOne);

booksRouter.patch('/:id', updateBook);

module.exports = booksRouter;
