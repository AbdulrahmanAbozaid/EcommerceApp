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