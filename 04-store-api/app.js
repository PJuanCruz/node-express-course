require('dotenv').config();
const express = require('express');
require('express-async-errors');
const connectDB = require('./db/connect');
const notFound = require('./middlewares/not-found');
const errorHandler = require('./middlewares/error-handler');
const productsRouter = require('./routes/products');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Store API<h1><a href="/api/v1/products">products route</a>');
});

app.use('/api/v1/products', productsRouter);

app.use(notFound);

app.use(errorHandler);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_DB_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
