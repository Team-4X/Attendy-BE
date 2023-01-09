const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes/index");
const bodyParser = require("body-parser");

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

// connect to the database
// listen on port 
app.listen(PORT, () => {
    console.log(`Server is running at https://localhost:${PORT}`);
})