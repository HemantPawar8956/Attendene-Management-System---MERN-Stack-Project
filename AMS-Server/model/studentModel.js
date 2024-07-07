const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  Name:String,
  ContactNo: String,
  Address: String,
  AdmissionDate:String,
  FathersName:String,
  gender: String,
  dob: String,
  Year: String,
  Semester: String,
  id: String,
  image: String,
});

const studentModel=mongoose.model("Student",studentSchema);

module.exports=studentModel;
