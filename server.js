const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const colors = require("colors");
const jwt = require("jsonwebtoken");

const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const connectDB = require("./config/db.js");
const Profile = require("./models/Profile.js");
// Connect to DB
connectDB();

const app = express();
app.use(express.json());

// @ROUTES
app.use("/todo", require("./routes/todos.js"));
app.use("/sort", require("./routes/sort.js"));
app.use("/tag", require("./routes/tags.js"));
app.use("/login", require("./routes/auth.js"));
app.use("/list", require("./routes/lists.js"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Console running on port ${PORT}`);
});
