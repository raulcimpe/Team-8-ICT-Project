const { findFeedbacksById, insertFeedback, findFeedback } = require("../models/feedback.models")

exports.getFeedbacksById = (req, res, next) => {
    const {project_id} = req.params
    findFeedbacksById(project_id).then((feedbacks) => {
        res.status(200).send({feedbacks})
    })
}

exports.postFeedback = (req, res, next) => {
    const body = req.body
    insertFeedback(body).then((feedback) => {        
        res.status(201).send({feedback})
    })
}

exports.getFeedback = (req, res, next) => {
    findFeedback().then((feedbacks) => {
        res.status(200).send({feedbacks})
    })
}