const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/CCNdb");

module.exports = mongoose
