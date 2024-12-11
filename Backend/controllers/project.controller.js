const { findProjects, findProjectById, insertProject, updateProjectById } = require("../models/projects.models")

exports.getProjects = (req, res, next) => {
    findProjects().then((projects) => {
        res.status(200).send({projects})
    })
}

exports.getProjectById = (req, res, next) => {
    const {project_id} = req.params
    findProjectById(project_id).then((project) => {
        res.status(200).send({project})
    })
}

exports.postProject = (req, res, next) => {
    const body = req.body
    insertProject(body).then((project) => {
        res.status(201).send({project})
    })
}

exports.patchProjectById = (req, res, next) => {
    const {project_id} = req.params
    const {status} = req.body
    updateProjectById(status, project_id).then((project) => {
        res.status(200).send({project})
    })
}