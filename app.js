var bodyParser = require("body-parser");
const routes = require("./routes/api");
const express = require("express");
const app = express();
const cors = require("cors");
const { sequelize } = require("./models");

app.use(cors());

// parse application/json
app.use(bodyParser.json());

app.use("/api", routes);
// sync all the tables
// sequelize.sync({ force: true }).then(() => {
//   console.log("table is sync");
// });

app.get("/get", async (req, res) => {
  return res.status(200).json({ msg: "working success" });
});

module.exports = app;
