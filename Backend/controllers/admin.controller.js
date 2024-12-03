const { findAdmins } = require("../models/admins.models")

exports.getAdmins = (req, res, next) => {
    findAdmins().then((admins) => {
        res.status(200).send({admins})
    })
}