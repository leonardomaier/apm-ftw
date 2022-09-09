const getEmployees = (req, res) => {
  res.json([])
}

const getEmployee = (req, res) => {
  res.json({ id: 1, name: 'Leonardo Maier'})
}

const createEmployee = (req, res) => {
  res.json({ data: 'Employee created successfully'})
}

const updateEmployee = (req, res) => {
  res.json({ data: 'Employee updated successfully'})
}

const deleteEmployee = (req, res) => {
  res.json({ data: 'Employee deleted successfully'})
}

module.exports = {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee
}