const express = require("express");
const morgan = require("morgan");
const layout = require("./views/layout");
const app = express();
const { db, Page, User } = require('./models');

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

app.get("/", (req, res) => {
  res.send(layout(''));
});

const init = async () => {
  await db.sync({ force:true});

  const PORT = 3000;
  app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
  });
}
init();
