const axios = require("axios");

const BASE_URL = "http://localhost:5000";

// Get all books
const getAllBooks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    return response.data;
  } catch (error) {
    return { error: "Failed to retrieve all books" };
  }
};

// Get book by ISBN
const getBookByISBN = async (isbn) => {
  try {
    const response = await axios.get(`${BASE_URL}/ISBN/${isbn}`);
    return response.data;
  } catch (error) {
    return { error: `No book found with ISBN ${isbn}` };
  }
};

// Get books by author
const getBooksByAuthor = async (author) => {
  try {
    const response = await axios.get(`${BASE_URL}/author/${encodeURIComponent(author)}`);
    return response.data;
  } catch (error) {
    return { error: `No books found for author ${author}` };
  }
};

// Get books by title
const getBooksByTitle = async (title) => {
  try {
    const response = await axios.get(`${BASE_URL}/title/${encodeURIComponent(title)}`);
    return response.data;
  } catch (error) {
    return { error: `No books found with title ${title}` };
  }
};

module.exports = {
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle,
};


