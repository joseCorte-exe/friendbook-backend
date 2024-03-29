import express from 'express'
import json from 'body-parser'
import database from './database/database.mjs'

import booksRoutes from './routes/books.routes.js'
import institutionsRoutes from './routes/institutions.routes.js'
import cors from 'cors'

const app = express()
app.use(cors())

app.use(json())
app.use(booksRoutes)

app.use('/', booksRoutes)
app.use('/', institutionsRoutes)

database()

app.listen(3030, () => console.log('Server running at localhost:3030'))
