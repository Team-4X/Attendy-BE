const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

const uri = "mongodb+srv://" + process.env.MONGO_DB_USERNAME + ":" + process.env.MONGO_DB_PASSWORD + process.env.MONGO_DB_URL;

mongoose.set('strictQuery', false);

async function connect() {
    try {
        await mongoose.connect(uri, { dbName: 'attendy-ams' });
        console.log("Connected to the database!");
    } catch (err) {
        console.error(err);
    }
}

module.exports = connect;
