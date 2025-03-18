import mongoose from 'mongoose';

class BookService {
    constructor() {
      this.bookSchema = new mongoose.Schema({
        title: String,
        isbn: String,
        pageCount: Number,
        publishedDate: Date,
        thumbnailUrl: String,
        shortDescription: String,
        longDescription: String,
        status: String,
        authors: [String],
        categories: [String],
      });
      this.Book = mongoose.model('Book', this.bookSchema);
    }
  
    async createBook(book) {
      return this.Book.create(book);
    }
  
    async getBooks() {
      return this.Book.find();
    }
  
    async getBookById(id) {
      return this.Book.findById(id);
    }
  
    async updateBook(id, book) {
      return this.Book.findByIdAndUpdate(id, book, { new: true });
    }
  
    async deleteBook(id) {
      return this.Book.findByIdAndDelete(id);
    }
  }
  
  export default BookService;