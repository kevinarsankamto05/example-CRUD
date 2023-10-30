const express = require("express"),
  router = express.Router(),
  authControllers = require("../controllers/authControllers"),
  multer = require("../middlewares/multer"),
  validate = require("../middlewares/validate"),
  schema = require("../validatorSchemas/authValidatorSchemas");

router.post(
  "/register",
  multer.image.single("image"),
  validate(schema.registerValidator),
  authControllers.register
);
router.get("/readUsers", authControllers.getUsers);

module.exports = router;
