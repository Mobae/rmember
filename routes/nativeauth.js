const { Router } = require("express");
const router = Router();
const Profile = require("../models/Profile");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
const { remove } = require("../models/Profile");

// get user
router.get("/get", auth, async (req, res) => {
  const { id } = req.user;
  let user = await Profile.findById(id, { password: 0 });
  res.send(user);
});

// register user
router.post(
  "/register",
  [
    check("email", "Please enter a valid Email").isEmail(),
    check("password", "Password must be minimum 6 characters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const { email, firstName, lastName } = req.body;
    console.log(email);
    const name = firstName + " " + lastName;
    let errors = validationResult(req);
    console.log(errors.array());
    if (!errors.isEmpty) {
      console.log("errors exist");
      res.status(422).send({ errors: errors.array() });
      return;
    }
    let user = await Profile.findOne({ email });
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

// login user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await Profile.findOne({ email });
  console.log(user);
  if (user) {
    const pwIsCorrect = await bcrypt.compare(password, user.password);
    if (pwIsCorrect) {
      payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(payload, "secret", (err, token) => {
        if (err) throw err;
        else res.json({ token });
      });
    } else {
      res.status(401).send("Invalid username/password");
    }
  } else res.status(401).send("Invalid username/password");
});

module.exports = router;
