const express = require("express");
const multer = require("multer");
const path = require("path");
console.log(path.join(__dirname, "public"));

let project_Routes = express();

const storageData = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(
      null,
      path.join(__dirname, "public", (error) => {
        if (error) {
          console.log(error);
        }
      })
    );
  },
  filename: (req, file, cb) => {
    const name = `${Date.now()} - ${file.originalname}`;
    cb(null, name, (error) => {
      if (error) {
        console.log(error);
      }
    });
  },
});

const upload=multer({storage:storageData});


module.exports=upload;