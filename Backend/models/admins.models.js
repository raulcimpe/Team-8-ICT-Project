const db = require("../db/connection")

exports.findAdmins = () => {
    return db.query(`SELECT * FROM admins`).then(({rows}) => {
        return rows
    })
}

exports.insertAdmins = ({username, password, firstname, lastname, address, phone, position, email}) => {
    return db.query(`INSERT INTO admins (username, password, firstname, lastname, email, phone, address, position) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`, [username, password, firstname, lastname, email, phone, address, position])
    .then(({rows}) => {
        return rows[0]
    })
}