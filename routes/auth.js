const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const colors = require("colors");
const jwt = require("jsonwebtoken");
const secretKey = "secretKey";

const Profile = require("../models/Profile.js");
const router = express.Router();
const keys = require("../config/keys.js");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.GOOGLE_CLIENT_ID,
      clientSecret: keys.GOOGLE_CLIENT_SECRET,
      callbackURL: "/login/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      const name = profile._json.name;
      const email = profile._json.email;
      const img = profile._json.picture;

      const _newProfile = Profile.findOne({ email: email }, (err, obj) => {
        console.log(obj);
        if (obj == null) {
          exists = false;
          console.log(" CREATING ");
          let newProfile = new Profile();
          newProfile.name = name;
          newProfile.email = email;
          newProfile.img = img;
          newProfile.save();
          console.log(newProfile);
          console.log("CREATED");
          return cb(err, {
            success: true,
            message: "created",
            profile: newProfile,
          });
        } else {
          exists = true;
          console.log("$$$$$$$$$ EXISTS $$$$$$$$$$$$");
          return cb(err, {
            success: true,
            message: "already exists",
            profile: obj,
          });
        }
      });
    }
  )
);

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  function (req, res) {
    data = req.user;
    user = data.profile;
    jwt.sign({ user: user }, secretKey, (err, token) => {
      res.status(200).json({
        token: token,
        data: data,
      });
    });
  }
);

// verifyToken Middleware
function verifyToken(req, res, next) {
  // Get Auth Header value
  const bearerHeader = req.headers["authorization"];
  // console.log(bearerHeader);
  // Check ig bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split by space
    const bearer = bearerHeader.split(" ");
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

module.exports = router;

// app.get('/home', verifyToken, (req, res) => {

//     jwt.verify(req.token, secretKey, (err, decoded) => {
//         console.log(decoded);
//         if(typeof decoded !== 'undefined'){
//             const user = decoded.user;
//             console.log(user);
//             const email = user.email;
//             if(typeof user !== 'undefined'){
//                 const profile = Profile.findOne(
//                     {email: email},
//                     (err, obj) => {
//                         if(obj === null){
//                             res.status(400).json({
//                                 success: false,
//                                 status: "not authorised"
//                             });
//                         } else {
//                             res.status(200).json({
//                                 success: true,
//                                 status: "authorised",
//                                 user: obj
//                             });
//                         };
//                     }
//                 );
//             } else {
//                 res.status(400).json({
//                     error: "Invalid token"
//                 });
//             };
//         } else {
//             res.status(400).json({
//                 error: "Invalid token"
//             });
//         };
//     });
// });
