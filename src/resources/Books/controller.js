const Book = require('./model');

const { createABook } = Book();

// Create a book
const createOneBook = (req, res) => {
  const newBook = req.body;

  createABook(newBook, (createdBook) => {
    res.json({ newBook: createdBook });
  });
};

module.exports = {
  createOneBook,
};
