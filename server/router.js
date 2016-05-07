const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

const Authentication = require('./controllers/authentication');
const Dog = require('./controllers/dog');
const ActivityType = require('./controllers/activityType');
const Activity = require('./controllers/activity');

module.exports = function(app) {
  app.get('/', requireAuth, function(req, res) {
    res.send({ message: 'Super secret code is ABC123' });
  });

  // User routes
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);

  // Dog routes
  app.get('api/dog/findAll', requireAuth, Dog.findAll);

  // Activity type routes
  app.get('api/activityType/findAll', requireAuth, ActivityType.findAll);

  // Activity routes
  app.get('api/activity/findAll', requireAuth, Activity.findAll);
};
