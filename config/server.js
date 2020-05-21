/**
 * NPM required packages
 */
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');



const routes = require('../app/routes');



/**
 * Importing configuration variables
 */
const {
  port,
  morganMode,
} = require('./config');

const {
  MONGO_URI,
  MONGODB_OPTIONS,
} = require('./db/mongo');


const swaggerJsDoc = require ('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const swaggerOptions = {
  swaggerDefinition: {
    info:{
      title:"Users API",
      description:"User API for mobile app",
      contact:{
        name:"estefany"
      },
      servers:["http://localhost:8081"]
    }
  },
  apis:["index.js"]
}
/**
 * Sets up the server configuration to an Express app
 * @param {*} app 
 */
const server = (app) => {
    mongoose.connect(MONGO_URI, MONGODB_OPTIONS, (err) => {
      if (err) {
        return console.log('Error while connecting to Mongo database');
      }
      return console.log('Succesfull Mongo database connection!');
    });
 
const swaggerDocs = swaggerJsDoc(swaggerOptions);

  app.disable('x-powered-by');
  app.set('port', port);
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(morgan(morganMode));
  app.use(cors());
  app.use('/', routes);
  app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocs));
};

module.exports = server;
