const mongoose = require("mongoose");

const batchSchema = mongoose.Schema({
  BatchCode: String,
  BatchType: String,
  Subject: String,
  TrainerName: String,
  LoginTime: String,
  LogoutTime: String,
  StartTime: String,
  CloseTime: String,
  StartDate: String,
  EndDate: String,
  TodaysAttended: Number,
  EnrolledStudents: Number,
  Attendence: Array,
  Status: String,
  id: String,
});

const batchModel = mongoose.model("Batches", batchSchema);

module.exports = batchModel;
