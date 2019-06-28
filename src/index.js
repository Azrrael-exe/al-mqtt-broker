const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const resHandler = require('./utils/resHandler')
const settings = require('./config/settings')

const api = require('./routes/api')
const broker = require('./services/broker')

app.use(bodyParser.json());

app.use('/', api)

app.use(resHandler.susscess)
app.use(resHandler.error)

const port = settings.PORT || 3000;

app.listen(port, () => {
    console.log(`Magic Happend in port: ${settings.PORT}`);
});
  
module.exports = app;