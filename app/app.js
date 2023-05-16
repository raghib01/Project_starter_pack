require("dotenv").config("../.env");
const express = require("express");

const app = express();

app.get("/health", (_req, res) => {
  res.status(200).json({ message: "Success app health" });
});

module.exports = app;
