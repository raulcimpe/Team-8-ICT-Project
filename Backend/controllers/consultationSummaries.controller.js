const { findConsultationSummaries, findConsultationSummariesById, insertConsultationSummary } = require("../models/consultationSummaries.models")

exports.getConsultationSummaries = (req, res, next) => {
    findConsultationSummaries().then((consultationSummaries) => {
        res.status(200).send({consultationSummaries})
    })
}

exports.getConsultationSummariesById = (req, res, next) => {
    const {project_id} = req.params
    findConsultationSummariesById(project_id).then((consultationSummaries) => {
        res.status(200).send({consultationSummaries})
    })
}

exports.postConsultationSummaries = (req, res, next) => {
    const body = req.body
    insertConsultationSummary(body).then((consultationSummary) => {
        return res.status(201).send({consultationSummary})
    })
}