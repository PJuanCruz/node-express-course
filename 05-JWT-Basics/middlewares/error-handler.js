const { StatusCodes } = require('http-status-codes');
const { AppError } = require('../errors');

const errorHandler = (error, req, res, next) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ message: error.message });
  }
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send('Something went wrong, please try again');
};

module.exports = errorHandler;
