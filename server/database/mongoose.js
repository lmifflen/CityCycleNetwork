const mongoose = require("mongoose");
const debug=require("debug")("server:mongoose")
require("dotenv").config
// const mongoUri = process.env.MONGODB_URI
// mongoose.connect(mongoUri);

mongoose.connect("mongodb+srv://bikeknights:pMgz1ttuS2rbxPoI@cluster0.6cnuf.mongodb.net/Project2db?retryWrites=true&w=majority")


module.exports = mongoose