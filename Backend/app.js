const express = require("express")

const cors = require("cors")
const { getAdmins, postAdmins } = require("./controllers/admin.controller")

const app = express()
app.use(express.json())
app.use(cors())

app.get('/admins', getAdmins)
app.post('/admins', postAdmins)

module.exports = app