const express = require("express");
const passport = require("passport");
require("../controller/googleAuth")(passport);
const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    // Redirect or respond with success message
    res.send("Successfully logged in with Google!");
  }
);

module.exports = router;
