const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
  name: String,
  role: String,
  salary: Number
})

const Employee = mongoose.model('employees', EmployeeSchema)

module.exports = Employee