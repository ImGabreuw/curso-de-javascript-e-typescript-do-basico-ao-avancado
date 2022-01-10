import User from "../models/User";

class UserController {
  async store(req, res) {
    try {
      const user = await User.create(req.body);

      const { id, nome, email } = user;

      return res.status(201).json({ id, nome, email });
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ["id", "nome", "email"] });

      const { id, nome, email } = users;
      return res.json({ id, nome, email });
    } catch (err) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      return res.json(user);
    } catch (err) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.send(404).json({
          errors: ["Usuário não existe."],
        });
      }

      const userAtualizado = await user.update(req.body);

      return res.json(userAtualizado);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.send(404).json({
          errors: ["Usuário não existe."],
        });
      }

      await user.destroy();

      return res.status(204).json(null);
    } catch (err) {
      return res.status(404).json(null);
    }
  }
}

export default new UserController();
