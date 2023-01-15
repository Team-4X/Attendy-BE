const passport = require('passport');
const { generateHash } = require('../lib/passwordUtils');
const Admin = require('../models/Admin');

exports.register = async (req, res) => {
  console.log('register backend!');
  console.log(req.body);
  const saltHash = generateHash(req.body.password);
  const salt = saltHash.salt;
  const hash = saltHash.hash;

  const newAdmin = new Admin({
    username: req.body.username,
    hash: hash,
    salt: salt,
    name: req.body.name
  });
  console.log(newAdmin);
  // testing 
  newAdmin.save()
  .then((admin) => {
    console.log(admin);
  });
  res.json('hello');
}
exports.login = async (req, res) => {
  passport.authenticate('local', { failureRedirect: '/login', successRedirect: '/home'});
}

exports.loginGet = async (req, res) => {
  res.json("hello from login!");
}
