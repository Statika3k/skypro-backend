const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [2, 'Имя должно быть не менее 2 символов'],
    maxlength: [20, 'Имя не должно превышать 20 символов'],
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    minlength: [2, 'Фамилия должна быть не менее 2 символов'],
    maxlength: [20, 'Фамилия не должна превышать 20 символов'],
    trim: true
  },
  username: {
    type: String,
    required: true,
    minlength: [5, 'Username должен быть не менее 5 символов'],
    maxlength: [20, 'Username не должен превышать 20 символов'],
    unique: true,
    trim: true
  },
  borrowedBooks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'book'
  }]
}, { timestamps: true });

module.exports = mongoose.model('user', userSchema);