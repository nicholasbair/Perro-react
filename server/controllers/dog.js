const Dog = require('../models/dog');

exports.findAll = function(req, res, next) {
  Dog.find()
    .then(dogs => {
      res.send(dogs);
    })
    .catch(err => {
      console.log(err);
    });
}
