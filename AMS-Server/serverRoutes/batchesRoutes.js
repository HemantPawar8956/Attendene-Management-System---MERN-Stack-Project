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

batch_Routes.get("/batch", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await batchModel.find({_id:id}).exec();
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
    const response = await batchModel.updateOne({ _id: id },data);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

batch_Routes.delete("/deletebatch", async (req, res)=>{
    try {
        const id = req.params.id;
        const response = await batchModel.findOneAndDelete({ _id: id });
        res.send(response);
      } catch (error) {
        res.send(error);
      }
})

batch_Routes.patch("/batchAttendence", async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    console.log(id,data)
    const response = await batchModel.findByIdAndUpdate( id,data,{new:true});
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});
module.exports=batch_Routes;