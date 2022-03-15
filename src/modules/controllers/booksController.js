const Book = module.require('../models/books.js')

class BooksController {
  async verifyIfBookNameExist (bookName) {
    const returnBook = [] = await Book.find({ bookName: bookName })
    if (returnBook[0] === undefined) {
      return false
    } else {
      return true
    }
  }

  async verifyIfEditionExist (Edition) {
    const returnEdition = [] = await Book.find({ Edition: Edition })
    if (returnEdition[0] === undefined) {
      return false
    } else {
      return true
    }
  }

  async listBooks () {
    const booksList = [] = await Book.find({})
    return booksList
  }
}

module.exports = BooksController
