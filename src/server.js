// O express é responsável por roterizar a API.
const express = require("express");

// O body-parser é responsável por gerenciar o app no modelo **REST**.
const bodyParser = require("body-parser");

// Instâncio aqui o express
const app = express();

// Aqui eu padronizo o body parser para sempre retornar **JSON**.
app.use(bodyParser.json());

//Responsável por entender os parametros via url.
app.use(bodyParser.urlencoded({ extended: false }));

const server = app.listen(3000, () =>
    console.log("App Listening on port 3000...")
);

module.exports = server;
