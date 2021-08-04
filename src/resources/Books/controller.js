const Book = require('./model');

const { createABook, getAllBooks, getOneBook, updateABook } = Book();

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

// Get One Book
const getOne = (req, res) => {
  const id = req.params.id;
  getOneBook(id, (book) => {
    res.json({ Found: book });
  });
};

const updateBook = (req, res) => {
  const id = req.params.id;
  const newBookData = req.body;

  updateABook(id, newBookData).then((updatedBook) => res.json({ updatedBook }));
};

module.exports = {
  createOneBook,
  getAll,
  getOne,
  updateBook,
};
