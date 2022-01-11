import multer from "multer";
import multerConfig from "../config/multer";

import Foto from "../models/Foto";

const upload = multer(multerConfig).single("foto");

class FotoController {
  async store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const foto = await Foto.create({ originalname, filename, aluno_id });

        return res.json(foto);
      } catch (err) {
        res.status(400).json({
          errors: ["Aluno não existe"],
        });
      }
    });
  }
}

export default new FotoController();
