const express = require('express')
const app = express()

const swaggerUI = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Challenge 1',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:4000',
        description: 'Development server',
      },
    ],
  },  
  basePath: "/",

  apis: ["./routes/teams.js"],
};

const swaggerDocs = swaggerJsdoc(options);
app.use('/', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

module.exports = app