const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const student_Routes = require("./serverRoutes/studentRoutes");
const batch_Routes = require("./serverRoutes/batchesRoutes");
const hr_Routes = require("./serverRoutes/HRsRoutes");
const trainer_Routes = require("./serverRoutes/trainerRoutes");
const tracker_Routes = require("./serverRoutes/trackerRoutes");
const manager_Routes = require("./serverRoutes/managerRoutes");
let app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/AMS-Project");

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use("/AMS", trainer_Routes);
app.use("/AMS", tracker_Routes);
app.use("/AMS", hr_Routes);
app.use("/AMS", student_Routes);
app.use("/AMS", manager_Routes);
app.use("/AMS", batch_Routes);

app.listen(4520, () => {
  console.log("Server is running on port 4520");
});
