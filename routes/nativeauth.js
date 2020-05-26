const { Router } = require("express");
const router = Router();
const User = require("../models/User");

router.post("/", async (req, res) => {
  let { password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const newPass = await bcrypt.hash(password, salt);
  delete req.body.password;
  console.log({ ...req.body, newPass });
});

module.exports = router;
