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
  console.log(req.body);
  var activity = new Activity({
    type: req.body.type,
    participant: req.body.participant,
    assessment: req.body.assessment,
    value: req.body.value,
    notes: req.body.notes
  });
  activity.save((activity) => {
    res.send(activity);
  }).catch(err => {
    console.log(err);
  });
}

exports.update = function(req, res, next) {
  Activity.findOne({ _id: req.params.id }, (err, doc) => {
    doc.type = req.body.type;
    doc.participant = req.body.participant;
    doc.assessment = req.body.assessment;
    doc.value = req.body.value;
    doc.notes = req.body.notes;

    doc.save();
  })
  .then(response => {
    res.send(response);
  })
  .catch(err => {
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
