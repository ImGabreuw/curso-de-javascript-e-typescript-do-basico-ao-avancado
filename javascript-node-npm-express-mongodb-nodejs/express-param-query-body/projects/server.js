const express = require("express");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome: <input type="text" name="nome">
  <button>Enviar formulário</button>
  </form>
  `);
});

app.get("/testes/:id?", (req, res) => {
  res.send(req.query);
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Recebi o formulário.");
});

app.get("/contato", (req, res) => {
  res.send("Obrigado por entrar em contato com a gent.");
});

app.listen(3000, () => {
  console.log("Servidor ouvindo a porta 3000");
});
