const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");

const authRoutes = require("../routes/auth");
const newsRoutes = require("../routes/news");

module.exports = function (app) {
  app.use(bodyParser.json({ limit: "50mb" }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(
    helmet({
      crossOriginResourcePolicy: false,
    })
  );
  app.use(cors());

  app.use("/api/auth", authRoutes);
  app.use("/api", newsRoutes);
};
