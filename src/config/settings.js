require('dotenv').config();
const assert = require('assert');
var moment = require('moment-timezone');

const {
    PORT,
    VERSION,
    BROKER_PORT,
    MONGO_URI,
    KEY,
    SECRET
} = process.env;

const variables = {
  PORT,
  VERSION,
  LAUNCH_AT: moment().tz("America/Bogota").format(),
  BROKER_PORT,
  MONGO_URI,
  KEY,
  SECRET
};

Object.keys(variables).forEach((key) => {
  assert(variables[key], `${key} is required`);
});

module.exports = variables;