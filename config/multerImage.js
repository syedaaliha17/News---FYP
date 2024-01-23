const multer = require("multer");
const path = require("path");

module.exports = function () {
  const imageStorage = multer.diskStorage({});

  const imageUpload = multer({
    storage: imageStorage,
    limits: {
      fileSize: 10000000, // 10000000 Bytes = 10 MB
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(jpeg|png|svg|jpg|gif|PNG)$/)) {
        return cb(new Error("Please upload Image"));
      }
      cb(undefined, true);
    },
  });
  return imageUpload;
};
