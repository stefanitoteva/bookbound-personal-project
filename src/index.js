const express = require('express');
const PORT = 5000;

const expressConfigurator = require('./config/expressConfiguration');

const app = express();

app.use(expressConfigurator);


app.listen(PORT, console.log(`Server is running on port ${PORT}...`));