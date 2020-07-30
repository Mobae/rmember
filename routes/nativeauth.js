const { Router } = require("express");
const router = Router();
const Profile = require("../models/Profile");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
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
    const { email, firstName, lastName } = req.body;
    const name = firstName + " " + lastName;
    let errors = validationResult(req);
    console.log(errors.array());
    if (!errors.isEmpty) {
      console.log("errors exist");
      res.status(422).send({ errors: errors.array() });
      return;
    }
    let user = await Profile.findOne({ email });
    console.log(user);
    if (user) {
      console.log("User exists");
      const errArr = [];
      errArr.push({ msg: "user exists" });
      res.status(422).send({ errors: errArr });
      return;
    }
    let { password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const newPass = await bcrypt.hash(password, salt);
    delete req.body.password;
    delete req.body.passwordC;
    user = new Profile({ name, email, password: newPass });
    console.log(user);
    await user.save();
    // res.send({ msg: "success" });
    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(
      payload,
      "secret",
      (err, token) => {
        if (err) throw err;
        console.log(token);
        res.json({ token });
      },
      { expiresIn: 3600 }
    );
  }
);

module.exports = router;
