const { StatusCodes } = require('http-status-codes');
const AppError = require('./custom-error');

class NotFoundError extends AppError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

module.exports = NotFoundError;
