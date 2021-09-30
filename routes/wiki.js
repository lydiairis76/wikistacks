const express = require("express");
const { addPage } = require("../views");
const layout = require("../views/layout");
const router = express.Router();

module.exports = router;

router.get("/", (req, res, next) => {
  res.send(layout(""));
  next();
});

router.post("/", (req, res, next) => {
  res.send("post");
  next();
});

router.get("/add", (req, res, next) => {
  res.send(addPage());
  next();
});
