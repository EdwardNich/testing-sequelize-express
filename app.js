require("dotenv").config();
const express = require("express");
const db = require("./models");
const { User, Blog } = db;
const app = express();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.COUDINARY_CLOUD_NAME,
  api_key: process.env.COUDINARY_API_KEY,
  api_secret: process.env.COUDINARY_TOKEN,
});

const PORT = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  res.send("Hello from Skillvul team 👋");
});

app.get("/user", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

app.get("/blog", async (req, res) => {
  cloudinary.uploader.upload(
    "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
    { public_id: "olympic_flag" }
  );

  res.json({
    type: "success",
  });
});

app.listen(PORT, () => {
  console.log("running...");
});
