const { findNotifications, findNotificationsById, insertNotifications, removeNotificationById } = require("../models/notifications.models");

exports.getNotifications = (req, res, next) => {
  findNotifications().then((notifications) => {
    res.status(200).send({ notifications });
  });
};

exports.getNotificationsById = (req, res, next) => {
  const { user_id } = req.params;
  findNotificationsById(user_id).then((notifications) => {
    res.status(200).send({ notifications });
  });
};

exports.postNotifications = (req, res, next) => {
    const body = req.body
    insertNotifications(body).then((notification) => {
        res.status(201).send(notification)
    })
}

exports.deleteNotificationById = (req, res, next) => {
    const {notification_id} = req.params
    removeNotificationById(notification_id).then(() => {
        res.sendStatus(204)
    })
}
