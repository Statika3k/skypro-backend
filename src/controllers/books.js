const Book = require('../models/book');

// Получить все книги
const getBooks = (req, res) => {
  Book.find({})
    .then(books => res.status(200).json(books))
    .catch(err => res.status(500).json({ error: err.message }));
};

// Получить книгу по ID
const getBook = (req, res) => {
  const { book_id } = req.params;
  Book.findById(book_id)
    .then(book => {
      if (!book) return res.status(404).json({ error: 'Книга не найдена' });
      res.status(200).json(book);
    })
    .catch(err => res.status(500).json({ error: err.message }));
};

// Создать книгу
const createBook = (req, res) => {
  Book.create(req.body)
    .then(book => res.status(201).json(book))
    .catch(err => res.status(500).json({ error: err.message }));
};

// Обновить книгу
const updateBook = (req, res) => {
  const { book_id } = req.params;
  Book.findByIdAndUpdate(book_id, req.body, { new: true, runValidators: true })
    .then(book => {
      if (!book) return res.status(404).json({ error: 'Книга не найдена' });
      res.status(200).json(book);
    })
    .catch(err => res.status(500).json({ error: err.message }));
};

// Удалить книгу
const deleteBook = (req, res) => {
  const { book_id } = req.params;
  Book.findByIdAndDelete(book_id)
    .then(book => {
      if (!book) return res.status(404).json({ error: 'Книга не найдена' });
      res.status(200).json({ message: 'Книга удалена' });
    })
    .catch(err => res.status(500).json({ error: err.message }));
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook
};