const express = require("express")

const cors = require("cors")
const { getAdmins, postAdmins } = require("./controllers/admin.controller")
const { getUsers, postUsers, getUserById } = require("./controllers/users.controller")
const { getAppointments, getAppointmentsByClientId, postAppointments, deleteAppointmentsById } = require("./controllers/appointment.controller")
const { getNotifications, getNotificationsById, postNotifications, deleteNotificationById } = require("./controllers/notification.controller")
const { getFeedbacksById, postFeedback, getFeedback } = require("./controllers/feedback.controller")
const { getConsultationSummaries, getConsultationSummariesById, postConsultationSummaries } = require("./controllers/consultationSummaries.controller")

const app = express()
app.use(express.json())
app.use(cors())

app.get('/admins', getAdmins)
app.post('/admins', postAdmins)

app.get('/users', getUsers)
app.post('/users', postUsers)
app.get('/users/:user_id', getUserById)

app.get('/appointments', getAppointments)
app.get('/appointments/:client_id', getAppointmentsByClientId)
app.post('/appointments', postAppointments)
app.delete('/appointments/:appointment_id', deleteAppointmentsById)

app.get('/notifications', getNotifications)
app.get('/notifications/:user_id', getNotificationsById)
app.post('/notifications', postNotifications)
app.delete('/notifications/:notification_id', deleteNotificationById)

app.get('/feedback/:project_id', getFeedbacksById)
app.post('/feedback', postFeedback)
app.get('/feedback', getFeedback)

app.get('/consultation-summaries', getConsultationSummaries)
app.get('/consultation-summaries/:project_id', getConsultationSummariesById)
app.post('/consultation-summaries', postConsultationSummaries)

module.exports = app