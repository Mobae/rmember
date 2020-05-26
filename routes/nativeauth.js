const { Router } = require("express");
const router = Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

router.post(
  "/",
  [
    check("email", "Please enter a valid Email").isEmail(),
    check("password", "Password must be minimum 6 characters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    let errors = validationResult(req);
    console.log(errors);
    if (errors.length !== 0) {
      res.status(422).send({ errors: errors.array() });
      return;
    }
    let { password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const newPass = await bcrypt.hash(password, salt);
    delete req.body.password;
    delete req.body.passwordC;
    console.log({ ...req.body, password: newPass });
    res.send({ msg: "success" });
    // await user.save();
  }
);

module.exports = router;
