const express = require("express"),
  router = express.Router(),
  profileControllers = require("../controllers/profileControllers");

router.get("/readProfile", profileControllers.getProfile);

module.exports = router;
