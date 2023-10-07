const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("./config/database");
const setActiveMenu = require("./helpers/helper");

const dashboardRoute = require("./routes/dashboardRoute");
const uangMasukRoute = require("./routes/uangMasukRoute");
const uangKeluarRoute = require("./routes/uangKeluarRoute");

const app = express();

app.set("view engine", "ejs");

app.use(setActiveMenu);
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", dashboardRoute);
app.use("/uangmasuk", uangMasukRoute);
app.use("/uangkeluar", uangKeluarRoute);

app.use((req, res) => {
  res.status(404).send("Halaman tidak ditemukan");
});

const port = 3000;
app.listen(port, () => {
  console.log(`App is running on port http://localhost:${port}`);
});
