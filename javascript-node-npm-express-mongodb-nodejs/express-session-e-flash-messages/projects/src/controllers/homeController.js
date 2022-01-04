exports.paginaInicial = (req, res) => {
  req.session.usuario = { nome: "Luiz", logado: true };
  res.render("index");
};

exports.tratarPost = (req, res) => {
  res.send("Ei, sou sua nova rota de POST.");
};
