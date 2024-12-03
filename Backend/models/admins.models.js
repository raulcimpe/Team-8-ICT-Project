const db = require("../db/connection")

exports.findAdmins = () => {
    return db.query(`SELECT * FROM admins`).then(({rows}) => {
        return rows
    })
}