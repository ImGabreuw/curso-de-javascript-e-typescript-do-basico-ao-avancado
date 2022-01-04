require("dotenv").config();

const express = require("express");
const path = require("path");

const mongoose = require("mongoose");
mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => app.emit("pronto"))
  .catch((err) => console.log(err));

const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");

const sessionOptions = session({
  secret: "adwaddhwdaposdwnda",
  store: MongoStore.create({ mongoUrl: process.env.CONNECTION_STRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias em milissegundos
    httpOnly: true,
  },
});

const app = express();
const routes = require("./routes");

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(routes);
app.use(express.static(path.resolve(__dirname, "public")));

app.use(sessionOptions);
app.use(flash());

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.on("pronto", () => {
  app.listen(3000, () => {
    console.log("Servidor ouvindo a porta 3000");
  });
});
