const mongoose = require("mongoose");
const debug=require("debug")("server:mongoose")
require("dotenv").config()
const mongoUri = process.env.MONGODB_URI
mongoose.connect(mongoUri)


module.exports = mongoose