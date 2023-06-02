const express = require('express');
const PORT = 5000;

const expressConfigurator = require('./config/expressConfig');
const hbsConfigurator = require('./config/hbsConfig');

const app = express();

app.use(expressConfigurator);
app.use(hbsConfigurator);


app.listen(PORT, console.log(`Server is running on port ${PORT}...`));