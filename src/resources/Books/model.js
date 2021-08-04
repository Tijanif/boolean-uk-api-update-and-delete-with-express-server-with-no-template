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

  createBookTable();
};

module.exports = Book;
