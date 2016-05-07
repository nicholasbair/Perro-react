const Dog = require('../models/dog');

exports.findAll = function(req, res, next) {
  db.getCollection('dogs').find()
    .then(dogs => {
      res.json(dogs);
    })
    .catch(err => {
      res.send(err);
    });
}
