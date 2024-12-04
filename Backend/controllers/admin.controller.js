const { findAdmins, insertAdmins } = require("../models/admins.models");

exports.getAdmins = (req, res, next) => {
  findAdmins().then((admins) => {
    res.status(200).send({ admins });
  });
};

exports.postAdmins = (req, res, next) => {
  const body = req.body;
  insertAdmins(body)
    .then((admin) => {
      res.status(201).send({ admin });
    })
    .catch(next);
};
