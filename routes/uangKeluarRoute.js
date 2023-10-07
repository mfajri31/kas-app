const express = require("express");
const router = express.Router();
const UangKeluarController = require("../controllers/UangKeluarController");

router.get("/", UangKeluarController.index);

module.exports = router;
