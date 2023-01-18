const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes/index");
const bodyParser = require("body-parser");
const connect = require("./db");
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const Session = require('./models/Session');

dotenv.config();

// get port from env file
// for now I will use 4000
const PORT = 4000;

const app = express();
app.use(bodyParser.json());
app.use(cors());

// sessions
// const sessionStore = new MongoStore({ mongooseConnection: connection, collection: 'sessions' });
// create session here
// const sessionStore = new Session({
 
// })

// app.use(session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: true,
//     store: sessionStore,
//     cookie: {
//         maxAge: 1000 * 60 * 60 * 24 * 2 // Equals 1 day (1 day * 24 hr/1 day * 60 min/1 hr * 60 sec/1 min * 1000 ms / 1 sec)
//     }
// }));

// passport authentication
require('./config/passport');
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    console.log(req.session);
    console.log(req.user);
    next();
})

app.get("/", (req, res) => {
    res.send("hello world!");
    console.log("all is well!");
});
app.use("/", routes);

// connect to the database
connect();

// listen on port 
app.listen(PORT, () => {
    console.log(`Server is running at https://localhost:${PORT}`);
})
