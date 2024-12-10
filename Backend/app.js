const express = require("express")

const cors = require("cors")
const { getAdmins, postAdmins } = require("./controllers/admin.controller")
const { getUsers, postUsers } = require("./controllers/users.controller")
const { getAppointments, getAppointmentsByClientId, postAppointments, deleteAppointmentsById } = require("./controllers/appointment.controller")
const { getNotifications, getNotificationsById, postNotifications, deleteNotificationById } = require("./controllers/notification.controller")

const app = express()
app.use(express.json())
app.use(cors())

app.get('/admins', getAdmins)
app.post('/admins', postAdmins)

app.get('/users', getUsers)
app.post('/users', postUsers)

app.get('/appointments', getAppointments)
app.get('/appointments/:client_id', getAppointmentsByClientId)
app.post('/appointments', postAppointments)
app.delete('/appointments/:appointment_id', deleteAppointmentsById)

app.get('/notifications', getNotifications)
app.get('/notifications/:user_id', getNotificationsById)
app.post('/notifications', postNotifications)
app.delete('/notifications/:notification_id', deleteNotificationById)

module.exports = app