const { generateHash, validatePassword } = require('../lib/passwordUtils');
const Admin = require('../models/Admin');
let jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  console.log('register backend!');

  const saltHash = generateHash(req.body.password);
  const salt = saltHash.salt;
  const hash = saltHash.hash;
  const email = req.body.email;

  const existingAdmin = await Admin.findOne({email});
  console.log(existingAdmin);

  if (existingAdmin) {
    res.status(406).json({message: "User already exists."});
    return;
  }

  const newAdmin = new Admin({
    username: req.body.userID,
    hash: hash,
    salt: salt,
    email: email,
    name: req.body.name
  });
  // testing 
  newAdmin.save()
  .then((admin) => {
    res.status(201).json({message: "Admin account created!"});
  });
}

exports.login = async (req, res) => {
  const {username, password} = req.body;

  const adminExists = await Admin.findOne({username}).select("+salt +hash");

  if (!adminExists) {
    res.status(404).json({message: "User doesn't exists."});
    return;
  }

  console.log(adminExists);
  const matched = await validatePassword(password, adminExists.hash, adminExists.salt);

  if (!matched) {
    res.status(404).json({message: "User doesn't exists."});
    return;
  }

  // create the JWT token 2:50
  const payLoad = {
    username: adminExists.username,
    _id: adminExists._id
  }

  const token = jwt.sign(payLoad, process.env.SECRET);
  // console.log(token);
  res.json({message: 'successfully logged in!', token});
}

exports.loginGet = async (req, res) => {
  res.json("hello from login!");
}
