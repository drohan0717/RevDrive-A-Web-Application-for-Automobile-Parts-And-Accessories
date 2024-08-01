const User = require('../Models/Users');

exports.register = (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  newUser.save(err => {
    if (err) {
      console.log(err);
      res.redirect('/register');
    } else {
      res.redirect('/home');
    }
  });
};

exports.login = (req, res) => {
  const username = req.body.email;
  const password = req.body.password;

  User.findOne({ email: username }, (err, foundUser) => {
    if (err) {
      console.log(err);
    } else {
      if (foundUser && foundUser.password === password) {
        res.redirect('/home');
      } else {
        res.redirect('/login');
      }
    }
  });
};
