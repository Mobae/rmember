const jwt = require("jsonwebtoken");

const secretKey = "secret";

module.exports = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    console.log("token: " + bearerHeader);
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];

    console.log(token);

    jwt.verify(token, secretKey, (err, decoded) => {
      // console.log(decoded);
      // console.log(decoded.user);
      if (err) {
      }
      req.user = decoded.user;
      next();
    });
  } else {
    res.status(403).json({
      success: false,
      error: "not authorized",
    });
  }
};
