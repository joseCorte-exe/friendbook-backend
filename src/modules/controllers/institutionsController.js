const Institution = module.require('../models/institutions.js')

class InstitutionController {
  async verifyIfInstitutionNameExist (institutionName) {
    const returnBook = [] = await Institution.find({ institutionName: institutionName })
    if (returnBook[0] === undefined) {
      return false
    } else {
      return true
    }
  }

  async listInstitutions () {
    const booksList = [] = await Institution.find({})
    return await booksList
  }
}

module.exports = InstitutionController
