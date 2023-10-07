const mongoose = require("mongoose");

const uangMasukSchema = new mongoose.Schema(
  {
    sumber_dana: String,
    nominal: Number,
    tanggal: String,
  },
  { collection: "uang_masuk" }
);

module.exports = mongoose.model("UangMasuk", uangMasukSchema);
