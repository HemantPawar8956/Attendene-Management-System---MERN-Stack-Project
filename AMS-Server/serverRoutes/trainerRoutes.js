const express = require("express");
const trainerModel = require("../model/trainerModel");

let trainer_Routes = express();

trainer_Routes.get("/trainers", async (req, res) => {
  try {
    const response = await trainerModel.find();
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

trainer_Routes.get("/gettrainer/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await trainerModel.find({ id: id });
    console.log(response);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

trainer_Routes.post("/createTrainer", async (req, res) => {
  try {
    const data = req.body;
    const response = new trainerModel(data);
    const userCreated = await response.save();
    res.send(userCreated);
  } catch (error) {
    res.send(error);
  }
});

trainer_Routes.put("/updateTrainer", async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const response = await trainerModel.updateOne({ id: id }, data);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

trainer_Routes.patch("/updatetrainertiming/:id", async (req, res) => {
  try {
    const trainerId = req.params.id;
    const data = req.body;
    console.log(data, trainerId);
    const response = await trainerModel.findOneAndUpdate(
      { id: Number(trainerId) },
      { $set: data },
      { new: true }
    );
    console.log(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

trainer_Routes.delete("/deleteTrainer", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await trainerModel.findOneAndDelete({ _id: id });
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

module.exports = trainer_Routes;
