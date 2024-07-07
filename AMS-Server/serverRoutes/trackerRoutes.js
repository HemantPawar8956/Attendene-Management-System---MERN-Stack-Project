const express = require("express");
const trackerModel = require("../model/trackerModel");

let tracker_Routes = express();

tracker_Routes.get("/trackers", async (req, res) => {
  try {
    const response = await trackerModel.find();
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

tracker_Routes.post("/createtracker", async (req, res) => {
  try {
    const data = req.body;
    const response = new trackerModel(data);
    const userCreated = await response.save();
    res.send(userCreated);
  } catch (error) {
    res.send(error);
  }
});

tracker_Routes.put("/updatetracker", async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const response = await trackerModel.updateOne({ _id: id },data);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

tracker_Routes.delete("/deletetracker", async (req, res)=>{
    try {
        const id = req.params.id;
        const response = await trackerModel.findOneAndDelete({ _id: id });
        res.send(response);
      } catch (error) {
        res.send(error);
      }
})

module.exports=tracker_Routes;