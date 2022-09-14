//Import the mongoose module
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = app => {
const uri = "mongodb+srv://111SP:memorandum@memorandum.mc57kqx.mongodb.net/?retryWrites=true&w=majority";
    mongoose
    .connect(uri, { 
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(client => {
      console.log("已經連接到 MongoDB-Tutorial 資料庫囉!");
    })
    .catch(err => {
      console.log("Cannot connect to the database...", err);
      process.exit();
    })
}

// Define schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    a_string: String,
    a_date: Date
});

// Compile model from schema
var SomeModel = mongoose.model('SomeModel', SomeModelSchema );
// Get Mongoose to use the global promise library