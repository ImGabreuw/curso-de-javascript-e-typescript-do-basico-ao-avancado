const express = require("express");
const app = express();

const routes = require("./routes");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(routes);

app.listen(3000, () => {
  console.log("Servidor ouvindo a porta 3000");
});
