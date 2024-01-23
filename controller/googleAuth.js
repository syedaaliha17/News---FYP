require("dotenv").config();
var GoogleStrategy = require("passport-google-oauth20").Strategy;
const { User } = require("../models/user");

module.exports = async function (passport) {
  // Configure Passport with GoogleStrategy
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:8080/api/auth/google/callback", // Update with your callback URL
      },
      async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({
          email: profile.emails[0].value,
        });
        if (existingUser) {
          return done(null, existingUser);
        } else {
          const user = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            password: null,
            phoneNumber: null,
          });
          const result = await user.save();
          if (result) {
            return done(null, user);
          } else {
            console.log("Error while creating new user");
          }
        }

        // This function will be called when the user is successfully authenticated with Google
        // You can perform additional operations here, such as saving the user to a database
        // return done(null, profile);
      }
    )
  );

  // Serialize and deserialize user information
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};
