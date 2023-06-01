const path = require('path');
const swaggerJsDoc = require('swagger-jsdoc');

const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

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
        url: `http://${hostname}:${port}/`,
      },
    ],
  },
  apis: [`${path.join(__dirname, './routes/*.js')}`],
};

const specs = swaggerJsDoc(options);

module.exports = specs;
