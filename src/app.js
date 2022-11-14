const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const router = require('./routes/routes');

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use(function(req, res, next) {
  res.status(404).json({message: 'Erro ao acessar a rota'});
});

module.exports = app;
