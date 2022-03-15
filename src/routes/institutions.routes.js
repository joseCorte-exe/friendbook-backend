const express = module.require('express')
const bodyParser = module.require('body-parser')
const InstitutionController = module.require('../modules/controllers/institutionsController')
const Institution = module.require('../modules/models/institutions')

const institutionsRoutes = express()

institutionsRoutes.use(bodyParser.json())
institutionsRoutes.use(bodyParser.urlencoded({ extended: true }))
institutionsRoutes.use(express.urlencoded({ extended: true }))

const institutionService = new InstitutionController()

institutionsRoutes.get('/', (request, response) => {
  return response.status(201).json({ message: 'hello' })
})

institutionsRoutes.get('/institutions', async (request, response) => {
  const booksList = await institutionService.listInstitutions()
  return response.json(booksList)
})

institutionsRoutes.post('/create/institution', async (request, response) => {
  const {
    institutionName,
    houseNumber,
    address,
    administratorName,
    administratorEmail
  } = request.body

  const institution = {
    institutionName,
    houseNumber,
    address,
    administratorName,
    administratorEmail
  }

  const institutionAlreadyExist = await institutionService.verifyIfInstitutionNameExist(institutionName)

  if (institutionAlreadyExist) {
    response.status(500).json({ message: 'instituição não criada' })
  } else {
    Institution.create(institution)
    response.status(201).json({ message: 'instituição criada com sucesso!' })
  }
})

module.exports = institutionsRoutes
