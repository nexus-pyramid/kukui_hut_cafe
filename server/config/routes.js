var path = require('path');
    // users = require('../controllers/users.js'),
    // items = require('../controllers/bucketlists.js');

var errors = {errors:{
      general: 'Invalid login information'
    }}
      console.log("in the login in method");
function loginAuthentication(req,res,next){
  if (req.session.Logged){
    next();
  }else if (req.session.Logged == ''){
      console.log('you messed up')
        res.json(401);
      } else {
          console.log('in the mfucking auth')
        res.json(401);
  }
}
module.exports = function(app){
  // app.post('/login', users.login);
  // app.get('/getlogged', users.getLogged);
  // app.get('/users', users.getAll);
  // app.get('/visit/:id', users.show);
  // app.post('/addItem', items.create);
  // app.get('/items', users.getUser);
  // app.get('/logout', users.logout);
};
