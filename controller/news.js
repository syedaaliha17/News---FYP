const path = require("path");
const cloudinary = require("cloudinary").v2;
const { StatusCodes } = require("http-status-codes");

const { News } = require("../models/news");

exports.createNews = async (req, res) => {
  try {
    const { englishImage, spanishImage } = req.files;

    const { news } = req.body;

    if (!req.files) {
      console.log("files is empty");

      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: "please add images for this news" });
    }

    let imagePathEn = await cloudinary.uploader.upload(englishImage[0].path);

    let imagePathEs = await cloudinary.uploader.upload(spanishImage[0].path);

    news["en-US"].imageUrl = imagePathEn.secure_url;
    news["es"].imageUrl = imagePathEs.secure_url;

    console.log(news);

    const newNews = new News({
      "en-US": JSON.parse(JSON.stringify(news["en-US"])),
      es: JSON.parse(JSON.stringify(news["es"])),
    });

    await newNews.save();
    console.log(newNews);

    const createdNews = await News.findById({
      _id: newNews._id,
    });

    res.status(201).json({
      message: "News created!",
      news: createdNews,
    });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

exports.getNews = async (req, res) => {
  try {
    const { category, ln } = req.params;

    const news = await News.find();

    const filterByLanguage = news.map((obj) => {
      return {
        _id: obj._id,
        title: obj[ln] ? obj[ln].title : obj["en-US"].title,
        description: obj[ln] ? obj[ln].description : obj["en-US"].description,
        category: obj[ln] ? obj[ln].category : obj["en-US"].category,
        channel: obj[ln] ? obj[ln].channel : obj["en-US"].channel,
        videoLink: obj[ln] ? obj[ln].videoLink : obj["en-US"].videoLink,
        imageUrl: obj[ln] ? obj[ln].imageUrl : obj["en-US"].imageUrl,
      };
    });

    const filterByCategory = filterByLanguage.filter((obj) => {
      return obj.category == category;
    });

    res.status(200).send({
      news: filterByCategory,
    });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};
