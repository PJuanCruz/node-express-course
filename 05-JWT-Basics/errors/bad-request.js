const { StatusCodes } = require('http-status-codes');
const AppError = require('./custom-error');

class BadRequestError extends AppError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequestError;
