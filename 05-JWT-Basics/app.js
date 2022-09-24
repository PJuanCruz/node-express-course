require('dotenv').config();
const express = require('express');
require('express-async-errors');
const appRouter = require('./routes');
const notFound = require('./middlewares/not-found');
const errorHandler = require('./middlewares/error-handler');

const app = express();

app.use(express.static('./public'));

app.use(express.json());

app.use('/api/v1', appRouter);

app.use(notFound);

app.use(errorHandler);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
