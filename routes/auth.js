const express = require("express"),
  router = express.Router(),
  authControllers = require("../controllers/authControllers"),
  multer = require("../middlewares/multer"),
  validate = require("../middlewares/validate"),
  schema = require("../validatorSchemas/authValidatorSchemas"),
  multerLib = require("multer")(); // multer library

router.post(
  "/register",
  multer.image.single("image"),
  validate(schema.registerValidator),
  authControllers.register
);
router.post(
  "/register-with-imageKit",
  multerLib.single("image"),
  validate(schema.registerValidator),
  authControllers.registerWithImageKit
);
router.post("/upload", multerLib.single("image"), authControllers.upload);
router.get("/readUsers", authControllers.getUsers);
router.put(
  "/update/:id",
  multer.image.single("image"),
  authControllers.updateUsers
);

module.exports = router;
