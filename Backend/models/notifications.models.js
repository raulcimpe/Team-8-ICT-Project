const db = require("../db/connection");

exports.findNotifications = () => {
  return db.query(`SELECT * FROM notifications`).then(({ rows }) => {
    return rows;
  });
};

exports.findNotificationsById = (id) => {
  return db
    .query(`SELECT * FROM notifications WHERE user_id = $1`, [id])
    .then(({ rows }) => {
      return rows;
    });
};

exports.insertNotifications = ({
  user_firstname,
  user_lastname,
  notification_type,
  message,
  status,
  sent_at,
}) => {
  return db
    .query(`SELECT user_id FROM users WHERE firstname = $1 AND lastname = $2`, [
      user_firstname,
      user_lastname,
    ])
    .then(({ rows }) => {
      return rows[0];
    })
    .then(({user_id}) => {
      return db.query(
        `INSERT INTO notifications (user_id, notification_type, message, status, sent_at) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [user_id, notification_type, message, status, sent_at]
      );
    }).then(({rows}) => {
        return rows[0]
    })
};

exports.removeNotificationById = (id) => {
    return db.query(`DELETE FROM notifications WHERE notification_id = $1`, [id])
}
