import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    const uploadDir = path.join(__dirname, "..", "public", "uploads");
    // const baseDir = path.join(__dirname, "..", "public/uploads");
    // console.log(baseDir);

    callback(null, uploadDir);
  },
  // Sets file(s) to be saved in uploads folder in same directory
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

export const upload = multer({ storage: storage });
