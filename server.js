const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes/index");
const bodyParser = require("body-parser");
const connect = require("./db");
const cors = require('cors');
const passport = require('passport');
const passportConfig = require('./config/passport');

dotenv.config();

// get port from env file
// for now I will use 4000
const PORT = 4000;


const app = express();
app.use(bodyParser.json());

// to allow headers for axios requests
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
    res.send("hello world!");
});

app.use(cors());
app.use(passport.initialize());
passportConfig(passport);

// connect to the database
connect();

// app.use((req, res, next) => {
    // console.log(req.session);
    // console.log(req.user);
    // next();
// })

// testing passport authentication
// app.get("/",
//     passport.authenticate("jwt", {session: false}),
//     (req, res) => {
//     res.send("hello world!");
//     console.log("all is well!");
// });
app.use("/", routes);
// app.get('*', (req,res) =>{
//     res.sendFile(path.join(__dirname+'/client/public/index.html'));
// });

// listen on port
app.listen(PORT, () => {
    console.log(`Server is running at https://localhost:${PORT}`);
})
