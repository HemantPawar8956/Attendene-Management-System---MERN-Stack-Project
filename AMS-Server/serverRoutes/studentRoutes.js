const express = require("express");
const studentModel = require("../model/studentModel");

let student_Routes = express();

student_Routes.get("/students", async (req, res) => {
  try {
    const response = await studentModel.find();
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

student_Routes.post("/createstudent", async (req, res) => {
  try {
    const data = req.body;
    const response = new studentModel(data);
    const userCreated = await response.save();
    res.send(userCreated);
  } catch (error) {
    res.send(error);
  }
});

student_Routes.put("/updatestudent", async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const response = await studentModel.updateOne({ _id: id }, data);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

student_Routes.delete("/deletestudent", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await studentModel.findOneAndDelete({ _id: id });
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

module.exports = student_Routes;
