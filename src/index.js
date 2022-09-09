const express = require('express')
const app = express()
const port = 3000

const employeeRoutes = require('./routes/employee.routes')

const logger = (req, res, next) => {
  console.log(req.url)
  console.log(req.params)
  console.log(req.query)
  console.log('\n')
  next()
}

app.use(logger)
app.use(express.json())

app.use('/api/employee', employeeRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

