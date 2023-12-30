const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook?tls=false&readPreference=primary"


const connectToMongo = async () => {
   await mongoose.connect(mongoURI);
    console.log("Connected");
}

module.exports = connectToMongo;