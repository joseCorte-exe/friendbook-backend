const mongoose = module.require('mongoose')

const bookSchema = new mongoose.Schema({
  bookName: String,
  launchedAt: String,
  Edition: String,
  Author: String,
  Publisher: String,
  units: Number,
  synopsis: String
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book
