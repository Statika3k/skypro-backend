const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: [2, 'Заголовок должен быть не менее 2 символов'],
    maxlength: [40, 'Заголовок не должен превышать 40 символов'],
    trim: true
  },
  author: {
    type: String,
    required: true,
    minlength: [2, 'Автор должен быть не менее 2 символов'],
    maxlength: [30, 'Автор не должен превышать 30 символов'],
    trim: true
  },
  year: {
    type: Number,
    required: true,
    min: [1000, 'Год должен быть корректным'],
    max: [2100, 'Год должен быть корректным']
  }
}, { timestamps: true });

module.exports = mongoose.model('book', bookSchema);