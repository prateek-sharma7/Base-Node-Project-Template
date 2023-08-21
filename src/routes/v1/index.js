const express = require("express");

const { InfoController } = require("../../controllers");

const router = express.Router();

//When there was no controller module
/* router.get("/info", (req, res) => {
  return res.json({ msg: "ok" });
}); */

//When we have a controller module
router.get("/info", InfoController.info);

module.exports = router;
