const { body } = require("express-validator");

const registerValidator = [
  body("name").notEmpty(),
  body("email").notEmpty().isEmail(),
  body("name").notEmpty(),
  body("gender").notEmpty(),
  body("phone").notEmpty(),
];

module.exports = {
  registerValidator,
};
