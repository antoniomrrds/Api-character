const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const router = require('./routes/routes');
const error404 = require('./middlewares/Error404');
const ErrorHandler = require('./middlewares/HandleError');

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(router);

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Phrases API',
      version: '1.0.0',
      description: 'A simple API',
    },
    servers: [
      {
        url: 'http://127.0.0.1:3002/',
      },
    ],
  },
  apis: [`${path.join(__dirname, './routes/*.js')}`],
};

const specs = swaggerJsDoc(options);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

app.use(error404);
app.use(ErrorHandler);

module.exports = app;
