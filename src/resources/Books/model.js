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

    db.query(sql, [title, author, genre]).then((result) => {
      callback(result.rows[0]);
    });
  };

  createBookTable();
  return {
    createABook,
  };
};

module.exports = Book;
