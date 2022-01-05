const mongoose = require("mongoose");
const validator = require("validator");

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const LoginModel = mongoose.model("Login", LoginSchema);

class Login {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  async register() {
    this.validar();

    if (this.errors.length > 0) return;

    try {
      this.user = await LoginModel.create(this.body);
    } catch (err) {
      console.log(err);
    }
  }

  validar() {
    this.convertAllFieldsValueToString();

    if (!validator.isEmail(this.body.email)) {
      this.errors.push("E-mail inválido");
    }

    if (this.body.password.length < 3 || this.body.password.length > 50) {
      this.errors.push("A senha precisar ter entre 3 a 50 caracteres");
    }
  }

  convertAllFieldsValueToString() {
    for (const key in this.body) {
      if (typeof this.body[key] !== "string") {
        this.body[key] = "";
      }
    }

    this.body = {
      email: this.body.email,
      password: this.body.password,
    };
  }
}

module.exports = Login;
