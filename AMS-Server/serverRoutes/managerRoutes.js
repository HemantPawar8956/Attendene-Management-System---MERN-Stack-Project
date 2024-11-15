const express = require("express");
const managerModel = require("../model/managersModel");

let manager_Routes = express();

manager_Routes.get("/managers", async (req, res) => {
  try {
    const response = await managerModel.find();
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});


manager_Routes.post("/createmanager", async (req, res) => {
  try {
    const data = req.body;
    const response = new managerModel(data);
    const userCreated = await response.save();
    res.send(userCreated);
  } catch (error) {
    res.send(error);
  }
});


manager_Routes.put("/updatemanager", async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const response = await managerModel.updateOne({ _id: id },data);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});


manager_Routes.delete("/deletemanager", async (req, res)=>{
    try {
        const id = req.params.id;
        const response = await managerModel.findOneAndDelete({ _id: id });
        res.send(response);
      } catch (error) {
        res.send(error);
      }
})

module.exports=manager_Routes;