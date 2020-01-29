/**
 *
 * # Database
 * Nós vamos trabalhar com o banco de dados não relacional MongoDB e vamos usar para tal o **mongoose**
 *
 */

// Adicionamos o mongoose.
const mongoose = require("mongoose");

// Dados de conexão do MongoDB
mongoose.connect("mongodb://localhost/gchat", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
});

// O mongoose vai retornar um Promise(Promessa)
mongoose.Promise = global.Promise;

//Exportar o modulo
module.exports = mongoose;
