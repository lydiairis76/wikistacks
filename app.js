const express = require("express");
const app = require();
const morgan = require("morgan");
const layout = require("views/layout");

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello!");
});

app.get("");

const PORT = 5432;
app.listen(PORT);
