const { findProjectStages, findProjectStagesById, insertProjectStage } = require("../models/projectStage.models")

exports.getProjectStages = (req, res, next) => {
    findProjectStages().then((projectStages) => {
        res.status(200).send({projectStages})
    })
}

exports.getProjectStagesById = (req, res, next) => {
    const {project_id} = req.params
    findProjectStagesById(project_id).then((projectStages) => {
        res.status(200).send({projectStages})
    })
}

exports.postProjectStages = (req, res, next) => {
    const body = req.body
    insertProjectStage(body).then((projectStage) => {
        res.status(201).send({projectStage})
    })
}