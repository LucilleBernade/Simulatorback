require('dotenv').config();
const express = require('express');

const apiRouter = require('./routers/api')

const app = express();

app.use('/api', apiRouter);

// Please keep this module.exports app, we need it for the tests !
module.exports = app;