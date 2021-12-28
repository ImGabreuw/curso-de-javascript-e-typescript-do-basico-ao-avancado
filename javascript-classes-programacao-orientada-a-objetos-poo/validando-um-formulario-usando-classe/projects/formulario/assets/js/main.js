class ValidarFormulario {
  constructor() {
    this.formulario = document.querySelector(".formulario");

    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener("submit", (event) => {
      this.handleSubmit(event);
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const camposValidos = this.camposValidos();
    const senhasValidas = this.senhasValidas();

    if (camposValidos && senhasValidas) {
      alert("Formulário enviado.");
      this.formulario.submit();
    }
  }

  senhasValidas() {
    let valido = true;

    const senha = this.formulario.querySelector(".senha");
    const repetirSenha = this.formulario.querySelector(".repetir-senha");

    if (senha.value !== repetirSenha.value) {
      valido = false;
      const mensagem = "As senhas são são iguais.";

      this.criarErro(senha, mensagem);
      this.criarErro(repetirSenha, mensagem);
    }

    if (senha.value.length < 6 || senha.value.length > 12) {
      valido = false;
      this.criarErro(senha, "Senha precisa ter entre 6 e 12 caracteres.")
    }

    return valido;
  }

  camposValidos() {
    let valido = true;

    for (let textoErro of this.formulario.querySelectorAll(".texto-erro")) {
      textoErro.remove();
    }

    for (let campo of this.formulario.querySelectorAll(".validar")) {
      const label = campo.previousElementSibling.innerText;

      if (!campo.value) {
        this.criarErro(campo, `Campo "${label}" não pode estar em branco.`);
        valido = false;
      }

      if (campo.classList.contains("cpf")) {
        if (!this.validarCPF(campo)) valido = false;
      }

      if (campo.classList.contains("usuario")) {
        if (!this.validarUsuario(campo)) valido = false;
      }
    }

    return valido;
  }

  validarCPF(campo) {
    const cpf = new ValidarCPF(campo.value);

    if (cpf.validar()) return true;

    this.criarErro(campo, "CPF inválido");

    return false;
  }

  validarUsuario(campo) {
    const usuario = campo.value;
    let valido = true;

    if (usuario.length < 3 || usuario.length > 12) {
      this.criarErro(campo, "Usuário precisar ter entre 3 e 12 caracteres.");
      valido = false;
    }

    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criarErro(campo, "Usuário só poderá conter letras e/ou números.")
      valido = false;
    }

    return valido;
  }

  criarErro(campo, mensagem) {
    const div = document.createElement("div");
    div.innerHTML = mensagem;
    div.classList.add("texto-erro");

    campo.insertAdjacentElement("afterend", div);
  }
}

const validar = new ValidarFormulario();
