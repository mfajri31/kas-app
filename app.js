const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/kas");

app.use(bodyParser.urlencoded({ extended: false }));

const uangMasukSchema = new mongoose.Schema(
  {
    sumber_dana: String,
    nominal: Number,
    tanggal: String,
  },
  { collection: "uang_masuk" }
);

const UangMasuk = mongoose.model("UangMasuk", uangMasukSchema);

app.get("/", (req, res) => {
  UangMasuk.find({}).then(function (data) {
    res.render("index.ejs", { uangMasuk: data });
  });
});

app.get("/tambah", (req, res) => {
  res.render("tambah.ejs");
});

app.post("/simpan", (req, res) => {
  const uangMasuk = new UangMasuk({
    sumber_dana: req.body.sumber_dana,
    nominal: req.body.nominal,
    tanggal: req.body.tanggal,
  });

  uangMasuk.save().then(function () {
    res.redirect("/");
  });
});

app.get("/edit/:id", (req, res) => {
  const id = req.params.id;
  UangMasuk.findById({ _id: id }).then(function (data) {
    res.render("edit.ejs", { uangMasuk: data });
  });
});

app.post("/update", (req, res) => {
  const id = req.body.id;
  const newData = req.body;

  UangMasuk.updateOne({ _id: id }, { $set: newData }).then(function () {
    res.redirect("/");
  });
});

app.get("/hapus/:id", (req, res) => {
  const id = req.params.id;
  UangMasuk.deleteOne({ _id: id }).then(function () {
    res.redirect("/");
  });
});

app.use((req, res, next) => {
  res.status(404).send("Halaman tidak ditemukan");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
