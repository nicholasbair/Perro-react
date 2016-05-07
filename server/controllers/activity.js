const Activity = require('../models/activity');

exports.findAll = function(req, res, next) {
  db.getCollection('activities').find()
    .then(activities => {
      res.json(activities);
    })
    .catch(err => {
      res.send(err);
    });
}
