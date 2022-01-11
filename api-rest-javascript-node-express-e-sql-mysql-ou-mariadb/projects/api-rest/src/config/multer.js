import multer from "multer";
import { extname, resolve } from "path";

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, resolve(__dirname, "..", ",,", "upload"));
    },
    filename: (req, file, callback) => {
      callback(null, `${Date.now()}_${aleatorio}${extname(file.originalname)}`);
    },
  }),
};
