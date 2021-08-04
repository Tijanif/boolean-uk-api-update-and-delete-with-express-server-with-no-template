const express = require('express');
const morgan = require('morgan');
const Book = require('./resources/Books/model');
const booksRouter = require('./resources/Books/router');
const db = require('./utilities/database');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Routes

app.use('/books', booksRouter);

app.get('*', (req, res) => {
  res.json({ ok: true });
});

// Listen to server
app.listen(4000, () => {
  db.connect((error) => {
    if (error) {
      console.error('[ERROR] Connection error: ', error.stack);
    } else {
      console.log('\n[DB] Connected....\n');

      Book();
    }
  });

  console.log('Server is running on port 4000');
});
