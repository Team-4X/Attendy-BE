const express = require("express");
const dotenv = require("dotenv");
const {
  attendanceRouter,
  studentRouter,
  testRouter,
} = require("./routes/index");
const bodyParser = require("body-parser");
const connect = require("./db");
const cors = require("cors");
dotenv.config();

// get port from env file
// for now I will use 4000
const PORT = 4000;

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello world!");
  console.log("all is well!");
});
app.use(cors());
app.use("/v1/attendance/", attendanceRouter);
app.use("/v1/student/", studentRouter);
app.use("/v1/test/", testRouter);

// connect to the database
connect();

// listen on port
app.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT}`);
});
