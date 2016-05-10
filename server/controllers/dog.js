'use strict';

const Dog = require('../models/dog');

exports.findAll = (req, res, next) => {
  Dog.find()
    .then(dogs => {
      res.send(dogs);
    }).catch(err => {
      res.send(err);
    });
}

exports.add = (req, res, next)  => {
  let dog = new Dog({
    name: req.body.name,
    tagline: req.body.tagline,
    img: 'rocko.jpeg'
  });
  dog.save((dog) => {
    res.send(dog);
  }).catch(err => {
    res.send(err);
  });
}

exports.update = (res, req, next) => {
  Dog.findOne({ _id: req.params.id }, (err, dog) => {
    dog.name = req.body.name;
    dog.tagline = req.body.tagline;
    dog.img = req.body.img;

    dog.save();
  }).then(response => {
    res.send(response);
  }).catch(err => {
    res.send(err);
  });
}

exports.findById = (req, res, next) => {
  Dog.find({ _id: req.params.id })
  .then(dog => {
    res.send(dog);
  }).catch(err => {
    res.send(err);
  });
}

exports.delete = (req, res, next) => {
  Dog.findOneAndRemove({ _id: req.params.id })
  .then(response => {
    res.send(response);
  }).catch(err => {
    res.send(err);
  });
}
