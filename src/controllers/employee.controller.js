const Employee = require("../models/employee.model")

const getEmployees = (req, res) => {
  Employee.find({})
    .then(result => res.status(200).json({ result }))
    .catch(error => res.status(500).json({ msg: error }))
}

const getEmployee = (req, res) => {
  Employee.find({ _id: req.params.employeeId })
    .then(result => res.status(200).json({ result }))
    .catch(error => res.status(500).json({ msg: error }))
}

const createEmployee = (req, res) => {
  Employee.create(req.body)
    .then(result => res.status(200).json({ result }))
    .catch(error => res.status(500).json({ msg: error }))
}

const updateEmployee = (req, res) => {
  
  const identifier = { _id: req.params.employeeId }
  const opts = { new: true, runValidators: true }

  Employee.findOneAndUpdate(identifier, req.body, opts)
    .then(result => res.status(200).json({ result }))
    .catch(() => res.status(404).json({msg: 'Employee not found' }))
}

const deleteEmployee = (req, res) => {
  Employee.findOneAndDelete({ _id: req.params.employeeId })
    .then(result => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({msg: 'Employee not found' }))
}

module.exports = {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee
}