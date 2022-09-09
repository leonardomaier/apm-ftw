const express = require('express')
const { getEmployee, getEmployees, createEmployee, updateEmployee, deleteEmployee } = require('../controllers/employee.controller')
const router = express.Router()

router.get('/', getEmployees)
router.get('/:employeeId', getEmployee)
router.post('/', createEmployee)
router.put('/:employeeId', updateEmployee)
router.delete('/:employeeId', deleteEmployee)

module.exports = router