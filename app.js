require("dotenv").config();
require("./config/db")();
const multer = require("multer");
const cloudinary = require("cloudinary").v2;

const express = require("express");
const expressSession = require("express-session");
const passport = require("passport");
const path = require("path");

const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();

// Configure session middleware
app.use(
  expressSession({
    secret: process.env.SUPER_KEY, // Replace with your own secret key
    resave: false,
    saveUninitialized: false,
  })
);

// Initialize Passport and session support
app.use(passport.initialize());
app.use(passport.session());

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

require("./config/morgan")(app);
require("./config/routes")(app);
app.get("/", (req, res) => {
  res.send("News backend Working!");
});

const port = parseInt(process.env.PORT) || 5006;

app.listen(port, "0.0.0.0", () => console.log(`server started at ${port}`)); //to serve locally
