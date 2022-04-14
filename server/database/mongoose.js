const mongoose = require("mongoose");
require('dotenv').config();
const connectionUrl=process.env.MONGO_URI;
console.log("check atlas connection", connectionUrl);

mongoose.connect(connectionUrl);

module.exports = mongoose;
