const UangKeluar = require("../models/UangKeluarModel");

class UangKeluarController {
  async index(req, res) {
    try {
      const uangKeluar = await UangKeluar.find();
      res.render("uangkeluar/index", { uangKeluar });
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
  }
}

module.exports = new UangKeluarController();
