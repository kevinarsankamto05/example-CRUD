const express = require("express"),
  router = express.Router(),
  addressControllers = require("../controllers/alamatControllers");

router.post("/input", addressControllers.alamat);

module.exports = router;
