const db = require("../db/connection")

exports.findConsultationSummaries = () => {
    return db.query(`SELECT * FROM consultation_summaries`).then(({rows}) => {
        return rows
    })
}

exports.findConsultationSummariesById = (id) => {
    return db.query(`SELECT * FROM consultation_summaries WHERE project_id = $1`, [id]).then(({rows}) => {
        return rows
    })
} 

exports.insertConsultationSummary = ({appointment_id, client_id, project_id, summary_text, uploaded_at, approval_status, approved_at}) => {
    return db.query(`INSERT INTO consultation_summaries (appointment_id, client_id, project_id, summary_text, approval_status, uploaded_at, approved_at) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [appointment_id, client_id, project_id, summary_text, approval_status, uploaded_at, approved_at]).then(({rows}) => {
        return rows[0]
    })
}