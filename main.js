const express = require('express');

const swaggerUI = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerJsDocs = YAML.load('./api.yaml')

const app = express();
const apiRoutes = require('./route/api');

const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.set('view engine', 'ejs');

app.use('/api',apiRoutes);

app.use("/",swaggerUI.serve,swaggerUI.setup(swaggerJsDocs))

app.listen(3000,() => console.log('Server Connected to 3000'));