const mongoose = require("mongoose");

const trainerSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  Name:String,
  ContactNo: String,
  role:String,
  Specialization:String,
  Address: String,
  JoiningDate:String,
  gender: String,
  dob: String,
  id: String,
  image: String,
  loginTime:String,
  logoutTime:String,
  ActiveBatches:String
});

const trainerModel=mongoose.model("Trainers",trainerSchema);

module.exports=trainerModel;
