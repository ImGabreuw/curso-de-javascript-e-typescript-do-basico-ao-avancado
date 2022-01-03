exports.paginaInicial = (req, res) => {
  res.render("index")
};

exports.tratarPost = (req, res) => {
  res.send("Ei, sou sua nova rota de POST.");
};
