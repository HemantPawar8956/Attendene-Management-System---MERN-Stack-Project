const mongoose = require("mongoose");

const managerSchema = mongoose.Schema({
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

const managerModel=mongoose.model("Managers",managerSchema);

module.exports=managerModel;
