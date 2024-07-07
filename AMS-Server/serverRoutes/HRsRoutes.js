const express = require("express");
const hrModel = require("../model/HRsModel");

let hr_Routes = express();

hr_Routes.get("/hrs", async (req, res) => {
  try {
    const response = await hrModel.find();
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

hr_Routes.post("/createhr", async (req, res) => {
  try {
    const data = req.body;
    const response = new hrModel(data);
    const userCreated = await response.save();
    res.send(userCreated);
  } catch (error) {
    res.send(error);
  }
});

hr_Routes.put("/updatehr", async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const response = await hrModel.updateOne({ _id: id },data);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

hr_Routes.delete("/deletehr", async (req, res)=>{
    try {
        const id = req.params.id;
        const response = await hrModel.findOneAndDelete({ _id: id });
        res.send(response);
      } catch (error) {
        res.send(error);
      }
})

module.exports=hr_Routes;