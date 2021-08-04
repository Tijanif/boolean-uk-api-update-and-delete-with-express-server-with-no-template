const express = require('express');

const booksRouter = express.Router();

const { createOneBook, getAll } = require('./controller');

booksRouter.post('/', createOneBook);

booksRouter.get('/', getAll);

module.exports = booksRouter;
