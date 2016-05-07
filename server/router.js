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
  // TODO: add requireAuth back to routes
  app.get('/api/dog/findAll', Dog.findAll);

  // Activity routes
  // TODO: add requireAuth back to routes
  app.get('/api/activityType/findAll', ActivityType.findAll);
  app.get('/api/activity/findAll', Activity.findAll);
  app.post('/api/activity/add', Activity.add);
};
