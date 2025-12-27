const express = require('express');
const router = express.Router();

let books = {
  "1": { "isbn": "1", "title": "Node.js Basics", "author": "John", "reviews": {} },
  "2": { "isbn": "2", "title": "Express Guide", "author": "Mary", "reviews": {} }
};

// Get all books
router.get('/books', (req, res) => {
  res.json(books);
});

// Get book by ISBN
router.get('/books/isbn/:isbn', (req, res) => {
  res.json(books[req.params.isbn]);
});

// Get books by author
router.get('/books/author/:author', (req, res) => {
  const result = Object.values(books).filter(
    book => book.author === req.params.author
  );
  res.json(result);
});

// Get books by title
router.get('/books/title/:title', (req, res) => {
  const result = Object.values(books).filter(
    book => book.title === req.params.title
  );
  res.json(result);
});

// Register user
router.post('/register', (req, res) => {
  res.json({ message: "User registered successfully" });
});

// Login user
router.post('/login', (req, res) => {
  res.json({ message: "User logged in successfully" });
});

// Add review
router.post('/review/:isbn', (req, res) => {
  books[req.params.isbn].reviews["user"] = req.body.review;
  res.json({ message: "Review added" });
});

// Delete review
router.delete('/review/:isbn', (req, res) => {
  delete books[req.params.isbn].reviews["user"];
  res.json({ message: "Review deleted" });
});

module.exports = router;
