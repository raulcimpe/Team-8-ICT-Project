const appointments = require("../db/data/test-data/appointments");
const {
  findAppointments,
  findAppointmentsByClientId,
  insertAppointments,
  removeAppointmentsById,
} = require("../models/appointments.models");

exports.getAppointments = (req, res, next) => {
  findAppointments().then((appointments) => {
    res.status(200).send({ appointments });
  });
};

exports.getAppointmentsByClientId = (req, res, next) => {
  const { client_id } = req.params;
  findAppointmentsByClientId(client_id).then((appointments) => {
    res.status(200).send({ appointments });
  });
};

exports.postAppointments = (req, res, next) => {
    const appointment = req.body
    insertAppointments(appointment).then((appointment) => {
        // console.log(appointment)
        res.status(201).send(appointment)
    })
}

exports.deleteAppointmentsById = (req, res, next) => {
    const {appointment_id} = req.params
    removeAppointmentsById().then(() => {
        res.status(204).send()
    })
}
