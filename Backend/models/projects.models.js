const db = require('../db/connection')

exports.findProjects = () => {
    return db.query(`SELECT * FROM projects`).then(({rows}) => {
        return rows
    })
}

exports.findProjectById = (id) => {
    return db.query(`SELECT * FROM projects WHERE project_id = $1`, [id]).then(({rows}) => {
        return rows[0]
    })
}

exports.insertProject = ({client_id, project_name, project_description, created_at, status}) => {
    return db.query(`INSERT INTO projects (client_id, project_name, project_description, created_at, status) VALUES ($1, $2, $3, $4, $5) RETURNING *`, [client_id, project_name, project_description, created_at, status]).then(({rows}) => {
        return rows[0]
    })
}

exports.updateProjectById = (updatedStatus, id) => {
    return db.query(`UPDATE projects SET status = $1 WHERE project_id = $2 RETURNING *`, [updatedStatus, id]).then(({rows}) => {
        return rows[0]
    })
}