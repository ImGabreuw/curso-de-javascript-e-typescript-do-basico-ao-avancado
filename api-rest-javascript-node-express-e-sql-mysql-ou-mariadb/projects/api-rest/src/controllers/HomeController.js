import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const aluno = await Aluno.create({
      nome: "Luiz",
      sobrenome: "Otávio",
      email: "luiz@gmail.com",
      idade: 112,
      peso: 300,
      altura: 2.5,
    });

    res.json(aluno);
  }
}

export default new HomeController();
