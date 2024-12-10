const db = require("../db/connection");

exports.findAppointments = () => {
  return db.query(`SELECT * FROM appointments`).then(({ rows }) => {
    return rows;
  });
};

exports.findAppointmentsByClientId = (client_id) => {
  return db
    .query(`SELECT * FROM appointments WHERE client_id = $1`, [client_id])
    .then(({ rows }) => {
      return rows;
    });
};

exports.insertAppointments = ({
  client_firstname,
  client_lastname,
  appointment_date,
  appointment_type,
  status,
  notes,
}) => {
  return db
    .query(`SELECT user_id FROM users WHERE firstname = $1 AND lastname = $2`, [
      client_firstname,
      client_lastname,
    ])
    .then(({ rows }) => {
      return rows[0]
    })
    .then(({ user_id }) => {
      return db.query(
        `INSERT INTO appointments (client_id, appointment_date, appointment_type, status, notes) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [user_id, appointment_date, appointment_type, status, notes]
      );
    }).then(({rows}) => {
        return rows[0]
    })
};

exports.removeAppointmentsById = (appointment_id) => {
    return db.query(`DELETE FROM appointments WHERE appointment_id = $1`, [appointment_id])
}
