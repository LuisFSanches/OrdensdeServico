if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// IMPORTANDO PACOTES
const express = require("express");
const expresslayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

//IMPORTANDO ROTAS
const indexRouter = require("./routes/index");
const osCreationRouter = require("./routes/osCreation");

const vehicleRouter = require("./routes/vehicles");

//CONFIGURANDO A VIEW ENGINE
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expresslayouts);
app.use(express.static("public"));

//UTILIZANDO OS PACOTES
app.use(bodyParser.urlencoded({ limit: "100mb", extended: false }));
//UTILIANDO ROTAS
app.use(indexRouter);
app.use(osCreationRouter);

app.use(vehicleRouter);

//CONFIGURANDO O BANCO DE DADOS
mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", error => console.log(error));
db.once("open", () => console.log("Conected to Mongoose"));

app.listen(process.env.PORT || 4000);
