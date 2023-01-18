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
    username: req.body.userID,
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
}

exports.login = async (req, res, next) => {
  // passport.authenticate('local', { failureRedirect: '/login', successRedirect: '/home' });
  console.log("in the login auth controller");
  console.log("after running passport.authenticate");
}

exports.loginGet = async (req, res) => {
  res.json("hello from login!");
}
