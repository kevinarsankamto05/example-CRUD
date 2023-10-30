const express = require("express"),
  router = express.Router(),
  authRoute = require("./auth"),
  authAlamat = require("./alamat");

router.use("/auth", authRoute);
router.use("/address", authAlamat);

module.exports = router;
