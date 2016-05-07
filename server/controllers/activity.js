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

exports.add = function(req, res, next) {
  var activity = new Activity({
    type: req.body.type,
    participant: req.body.participant,
    value: req.body.value,
    notes: req.body.notes
  });
  activity.save((activity) => {
    res.send(activity);
  }).catch(err => {
    console.log(err);
  });
}

exports.findById = function(req, res, next) {
  Activity.find({ _id: req.params.id })
  .then(activity => {
    res.send(activity);
  })
  .catch(err => {
    console.log(err);
  });
}
