const mongoose = require("mongoose");
const debug=require("debug")("server:mongoose")
const path = require('path');

const mongoUri = process.env.MONGODB_URI
mongoose.connect(mongoUri)


module.exports = mongoose