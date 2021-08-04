const Book = require('./model');

const { createABook, getAllBooks } = Book();

// Create a book
const createOneBook = (req, res) => {
  const newBook = req.body;

  createABook(newBook, (createdBook) => {
    res.json({ newBook: createdBook });
  });
};

// Get all books
const getAll = (req, res) => {
  getAllBooks((allBooks) => {
    res.json({ All: allBooks });
  });
};

module.exports = {
  createOneBook,
  getAll,
};
