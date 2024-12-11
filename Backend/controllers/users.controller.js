const { findUsers, insertUsers, findUserById } = require("../models/users.model")

exports.getUsers = (req, res, next) => {
    findUsers().then((users) => {
        res.status(200).send({users})
    })
}

exports.postUsers = (req, res, next) => {
    const body = req.body
    insertUsers(body).then((user) => {
        res.status(201).send(user)
    })
}

exports.getUserById = (req, res, next) => {
    const {user_id} = req.params
    findUserById(user_id).then((user) => {
        res.status(200).send({user})
    })
}