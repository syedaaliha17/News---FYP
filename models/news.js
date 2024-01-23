const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  "en-US": {
    title: { type: String, require: true },
    description: { type: String, required: true },
    channel: { type: String, required: true },
    category: { type: String, required: true },
    videoLink: { type: String, required: true },
    imageUrl: { type: String, required: true },
  },
  es: {
    title: { type: String, require: true },
    description: { type: String, required: true },
    channel: { type: String, required: true },
    category: { type: String, required: true },
    videoLink: { type: String, required: true },
    imageUrl: { type: String, required: true },
  },
});

const News = mongoose.model("News", newsSchema);
exports.News = News;
