const db = require('../db/connection')

exports.findProjectStages = () => {
    return db.query(`SELECT * FROM project_stages`).then(({rows}) => {
        return rows
    })
}

exports.findProjectStagesById = (id) => {
    return db.query(`SELECT * FROM project_stages WHERE project_id = $1`, [id]).then(({rows}) => {
        return rows
    })
}

exports.insertProjectStage = ({project_id, stage_name, status, start_date, completion_date, notes}) => {
    return db.query(`INSERT INTO project_stages (project_id, stage_name, status, start_date, completion_date, notes) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`, [project_id, stage_name, status, start_date, completion_date, notes]).then(({rows}) => {
        return rows[0]
    })
}