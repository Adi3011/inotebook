const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/?tls=false&readPreference=primary"


const connectToMongo = async () => {
    mongoose.connect(mongoURI);
    console.log("Connected")
;}

module.exports = connectToMongo;