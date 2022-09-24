const mongoose = require('mongoose');

const connectDB = (MONGO_DB_URI) => {
  return mongoose.connect(MONGO_DB_URI);
};

module.exports = connectDB;
