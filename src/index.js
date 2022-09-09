const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const employeeRoutes = require('./routes/employee.routes')

require('dotenv').config()

const logger = (req, res, next) => {
  console.log(req.url)
  console.log(req.params)
  console.log(req.body)
  console.log(req.query)
  console.log('\n')
  next()
}

app.use(logger)
app.use(express.json())

app.use('/api/employee', employeeRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    }))
    .catch(() => console.log(Error))

