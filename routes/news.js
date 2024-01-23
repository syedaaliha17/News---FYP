const express = require("express");
const router = express.Router();

const newsController = require("../controller/news");
const imageUpload = require("../config/multerImage")();

router.post(
  "/create-news",
  // imageUpload.single("image"),
  imageUpload.fields([
    { name: "englishImage", maxCount: 1 },
    { name: "spanishImage", maxCount: 1 },
  ]),
  newsController.createNews
);

router.get("/:category/get-news/:ln", newsController.getNews);

module.exports = router;
