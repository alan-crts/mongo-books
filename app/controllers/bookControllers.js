import BookService from '../services/bookService.js';

const bookService = new BookService();

export const createBook = async (req, res) => {
  const book = req.body;
  try {
    const newBook = await bookService.createBook(book);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getBooks = async (req, res) => {
  try {
    const books = await bookService.getBooks();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await bookService.getBookById(id);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const updateBook = async (req, res) => {
  const { id } = req.params;
  const book = req.body;
  try {
    const updatedBook = await bookService.updateBook(id, book);
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    await bookService.deleteBook(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export default {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
};