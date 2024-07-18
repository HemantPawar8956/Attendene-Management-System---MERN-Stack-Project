const express = require("express");
const batchModel = require("../model/batchesModel");

let batch_Routes = express();

batch_Routes.get("/batches", async (req, res) => {
  try {
    const response = await batchModel.find();
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

batch_Routes.get("/batch/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await batchModel.find({ BatchCode: id }).exec();
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

batch_Routes.post("/createbatch", async (req, res) => {
  try {
    const data = req.body;
    const response = new batchModel(data);
    const userCreated = await response.save();
    res.send(userCreated);
  } catch (error) {
    res.send(error);
  }
});

batch_Routes.put("/updatebatch", async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const response = await batchModel.updateOne({ _id: id }, data);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

batch_Routes.delete("/deletebatch", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await batchModel.findOneAndDelete({ _id: id });
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

batch_Routes.patch("/batchAttendence:id", async (req, res) => {
  try {
    const batchId = req.params.id;
    const data = req.body;
    const response = await trainerModel.findOneAndUpdate(
      { id: Number(batchId) },
      { $set: data },
      { new: true }
    );
    console.log(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = batch_Routes;
