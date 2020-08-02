const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.js");

const Tag = require("../models/Tag.js");

// @ROUTE GET /tag
router.get("/", auth, async (req, res) => {
  try {
    const user = req.user;
    const tags = await Tag.find({ user: user._id });
    res.status(200).json({
      success: true,
      count: tags.length,
      data: tags,
    });
  } catch {
    res.status(500).json({
      success: false,
      data: "Server error",
    });
  }
});

// @ROUTE POST /tag
router.post("/", auth, async (req, res) => {
  try {
    const user = req.user;
    req.body["user"] = user._id;
    const tag = await Tag.create(req.body);
    res.status(200).json({
      success: true,
      count: tag.length,
      data: tag,
    });
  } catch {
    res.status(500).json({
      success: false,
      data: "Server error",
    });
  }
});

// @ROUTE DELETE /tag/:id
router.delete("/:id", auth, async (req, res) => {
  try {
    const tag = await Tag.findById(req.params.id);
    if (!todo) {
      res.status(404).json({
        success: false,
        data: "No todo found !",
      });
    }

    await todo.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch {
    res.status(500).json({
      success: false,
      data: "Server error",
    });
  }
});

module.exports = router;
