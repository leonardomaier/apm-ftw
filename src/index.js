const express = require('express')
const mongoose = require('mongoose')
const employeeRoutes = require('./routes/employee.routes')

const app = express()
const port = 3000

require('dotenv').config()

app.use(express.json())

app.use('/api/employee', employeeRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    }))
    .catch(() => console.log(Error))

