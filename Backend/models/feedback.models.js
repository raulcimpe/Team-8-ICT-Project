const db = require("../db/connection");

exports.findFeedbacksById = (id) => {
  return db
    .query(`SELECT * FROM feedback WHERE project_id = $1`, [id])
    .then(({ rows }) => {
      return rows;
    });
};

exports.insertFeedback = ({
  project_id,
  client_id,
  rating,
  review,
  created_at,
}) => {
  return db
    .query(
      `INSERT INTO feedback (project_id, client_id, rating, review, created_at) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [project_id, client_id, rating, review, created_at]
    )
    .then(({ rows }) => {
      return rows[0];
    });
};

exports.findFeedback = () => {
    return db.query(`SELECT * FROM feedback`).then(({rows}) => {
        return rows
    })
}
