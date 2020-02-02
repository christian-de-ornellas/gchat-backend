// O express é responsável por roterizar a API.
const express = require("express");
const cors = require("cors");
// O body-parser é responsável por gerenciar o app no modelo **REST**.
const bodyParser = require("body-parser");

// Instâncio aqui o express
const app = express();

// Aqui eu padronizo o body parser para sempre retornar **JSON**.
app.use(bodyParser.json());

app.use(cors());

//Responsável por entender os parametros via url.
app.use(bodyParser.urlencoded({ extended: false }));

//Rota de usuários
require("./controllers/UserController")(app);

//Rota de mensagens
require("./controllers/MessageController")(app);

const server = app.listen(3333, () =>
    console.warn("App Listening on port 3333...")
);

module.exports = server;
