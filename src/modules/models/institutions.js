const mongoose = module.require('mongoose')

const institutionSchema = new mongoose.Schema({
  institutionName: String,
  houseNumber: String,
  address: String,
  administratorName: String,
  administratorEmail: String
})

const Institution = mongoose.model('Institution', institutionSchema)

module.exports = Institution
