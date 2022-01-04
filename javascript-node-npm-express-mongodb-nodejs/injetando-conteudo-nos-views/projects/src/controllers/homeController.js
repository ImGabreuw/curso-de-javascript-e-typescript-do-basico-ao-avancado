exports.paginaInicial = (req, res) => {
  res.render("index", {
    titulo: "Este será o <span style='color: red'>título</span> da página",
    numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  });

  return;
};

exports.tratarPost = (req, res) => {
  res.send("Ei, sou sua nova rota de POST.");

  return;
};
