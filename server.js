const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o app
const app = express();
app.use(express.json());//retorna os arquivos criado em json

//Iniciando o mongodb
mongoose.connect("mongodb://localhost:27017/nodeapi", {useNewUrlParser: true});

//Biblioteca require-dir instalada para facilitar a integração do model
requireDir('./src/model/');

//Rotas
app.use('/', require('./src/routes'));

app.listen(3000, function() {
    console.log("Servidor rodando na porta 3000!");
    console.log("MongoDB rondando na porta 27017!");
});