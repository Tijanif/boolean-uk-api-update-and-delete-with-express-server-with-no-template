const express = require('express');

const booksRouter = express.Router();

const { createOneBook } = require('./controller');

booksRouter.post('/', createOneBook);

module.exports = booksRouter;
