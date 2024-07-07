const mongoose = require("mongoose");

const trackerSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  Name:String,
  ContactNo: String,
  role:String,
  Address: String,
  loginTime:String,
  logoutTime:String,
  JoiningDate:String,
  gender: String,
  dob: String,
  id: String,
  image: String,
});

const trackerModel=mongoose.model("Trackers",trackerSchema);

module.exports=trackerModel;
