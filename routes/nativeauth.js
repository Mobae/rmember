const { Router } = require("express");
const router = Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
  let { password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const newPass = await bcrypt.hash(password, salt);
  delete req.body.password;
  delete req.body.passwordC;
  console.log({ ...req.body, password: newPass });
  await user.save();
});

module.exports = router;
