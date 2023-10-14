import multer from "multer";
import path from "path";

export default function (directory) {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `src/uploads/${directory}`);
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e5);
      const extension = path.extname(file.originalname);
      cb(null, file.fieldname + "-" + uniqueSuffix + extension);
    },
  });

  return multer({ storage });
}

export const handleFileUploadError = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code == "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        error: "File is too large",
      });
    }
    if (err.code == "LIMIT_FILE_COUNT") {
      return res.status(400).json({
        error: "File limit exceeded",
      });
    }
    if (err.code == "LIMIT_UNEXPECTED_FILE") {
      return res.status(400).json({
        error: "File must be an image",
      });
    }
  }
};
