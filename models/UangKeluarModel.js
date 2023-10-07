const mongoose = require("mongoose");

const uangKeluarSchema = new mongoose.Schema(
  {
    keperluan: String,
    nominal: Number,
    tanggal: String,
  },
  { collection: "uang_keluar" }
);

module.exports = mongoose.model("UangKeluar", uangKeluarSchema);
