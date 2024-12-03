const express = require("express")

const cors = require("cors")
const { getAdmins } = require("./controllers/admin.controller")

const app = express()
app.use(express.json())
app.use(cors())

app.use('/admins', getAdmins)

module.exports = app