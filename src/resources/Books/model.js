const db = require('../../utilities/database');

const Book = () => {
  // Create a table
  const createBookTable = () => {
    const sql = `
      
     CREATE TABLE IF NOT EXISTS books(
     id     SERIAL       PRIMARY KEY,
     title  VARCHAR(20)  NOT NULL,
     author VARCHAR(20)  NOT NULL,
     genre  VARCHAR(20)  NOT NULL
    );
   `;

    db.query(sql)
      .then((result) => {
        console.log('[DB] Book Table Ready');
      })
      .catch(console.error);
  };

  // Add One Book
  const createABook = (newBook, callback) => {
    const { title, author, genre } = newBook;
    const sql = `
    INSERT INTO books(
     title,
     author,
     genre
    )
    VALUES ($1, $2, $3)
     RETURNING *;
   `;

    db.query(sql, [title, author, genre])
      .then((result) => {
        callback(result.rows[0]);
      })
      .catch(console.error);
  };

  // Get all books
  const getAllBooks = (callback) => {
    const sql = `
   SELECT * FROM books;
   `;

    db.query(sql)
      .then((result) => {
        callback(result.rows);
      })
      .catch(console.error);
  };

  // Find one book
  const getOneBook = (id, callback) => {
    const sql = `
    SELECT * FROM books
    WHERE id = $1;
    `;

    db.query(sql, [id])
      .then((result) => {
        callback(result.rows);
      })
      .catch(console.error);
  };

  // Patch a book
  function updateABook(id, newBookData) {
    // find current book to update
  }
  createBookTable();
  return {
    createABook,
    getAllBooks,
    getOneBook,
    updateABook,
  };
};

module.exports = Book;
