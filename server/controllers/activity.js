const Activity = require('../models/activity');

exports.findAll = function(req, res, next) {
  Activity.find()
    .then(activities => {
      res.send(activities);
    })
    .catch(err => {
      console.log(err);
    });
}
