const UangMasuk = require("../models/UangMasukModel");

class UangMasukController {
  async index(req, res) {
    try {
      const uangMasuk = await UangMasuk.find();
      res.render("uangmasuk/index", { uangMasuk });
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
  }

  tambah(req, res) {
    res.render("uangmasuk/tambah");
  }

  async simpan(req, res) {
    const uangMasuk = new UangMasuk({
      sumber_dana: req.body.sumber_dana,
      nominal: req.body.nominal,
      tanggal: req.body.tanggal,
    });

    try {
      await uangMasuk.save();
      res.redirect("/uangmasuk");
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
  }

  async edit(req, res) {
    const id = req.params.id;

    try {
      const data = await UangMasuk.findById({ _id: id });
      res.render("uangmasuk/edit", { uangMasuk: data });
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
  }

  async update(req, res) {
    const id = req.body.id;
    const newData = req.body;

    try {
      await UangMasuk.updateOne({ _id: id }, { $set: newData });
      res.redirect("/uangmasuk");
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
  }

  async hapus(req, res) {
    const id = req.params.id;

    try {
      await UangMasuk.deleteOne({ _id: id });
      res.redirect("/uangmasuk");
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
  }
}

module.exports = new UangMasukController();
