const express = require("express");
const router = express.Router();
const UangMasukController = require("../controllers/UangMasukController");

router.get("/", UangMasukController.index);
router.get("/tambah", UangMasukController.tambah);
router.post("/simpan", UangMasukController.simpan);
router.get("/edit/:id", UangMasukController.edit);
router.post("/update", UangMasukController.update);
router.get("/hapus/:id", UangMasukController.hapus);

module.exports = router;
