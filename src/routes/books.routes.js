const BooksController = module.require('../modules/controllers/booksController')
const express = module.require('express')
const Book = module.require('../modules/models/books')
const bodyParser = module.require('body-parser')

const booksRoutes = express()

booksRoutes.use(bodyParser.json())
booksRoutes.use(bodyParser.urlencoded({ extended: true }))
booksRoutes.use(express.urlencoded({ extended: true }))

const booksService = new BooksController()

booksRoutes.get('/', (request, response) => {
  return response.status(201).json({ message: 'hello' })
})

booksRoutes.get('/books', async (request, response) => {
  const booksList = await booksService.listBooks()
  return response.json(booksList)
})

booksRoutes.post('/create/book', async (request, response) => {
  const {
    id,
    bookName,
    launchedAt,
    Edition,
    Author,
    Publisher,
    units,
    synopsis
  } = request.body

  const book = {
    id,
    bookName,
    launchedAt,
    Edition,
    Author,
    Publisher,
    units,
    synopsis
  }

  const editionAlreadyExist = await booksService.verifyIfEditionExist(Edition)

  const bookNameAlreadyExist = await booksService.verifyIfBookNameExist(bookName)

  if (bookNameAlreadyExist) {
    if (editionAlreadyExist) {
      return response.status(500).json({ message: 'book alredy exist' })
    } else {
      Book.create(book)
      return response.status(201).json({ message: 'livro cadastrado' })
    }
  } else {
    Book.create(book)
    return response.status(201).json({ message: 'livro cadastrado' })
  }
})

module.exports = booksRoutes
