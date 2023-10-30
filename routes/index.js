const express = require("express"),
  router = express.Router(),
  authRoute = require("./auth"),
  authAlamat = require("./alamat"),
  authProfile = require("./profiles");

router.use("/auth", authRoute);
router.use("/address", authAlamat);
router.use("/profiles", authProfile);

module.exports = router;
