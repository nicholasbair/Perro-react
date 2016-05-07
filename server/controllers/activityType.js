const ActivityType = require('../models/activityType');

exports.findAll = function(res, req, next) {
  db.getCollection('activityTypes').find()
  .then(activityTypes => {
    console.log(activityTypes);
    // res.json(activityTypes);
  })
  .catch(err => {
    res.send(err);
  });
}
