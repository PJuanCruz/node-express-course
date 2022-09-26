const { StatusCodes } = require('http-status-codes');
const AppError = require('./custom-error');

class UnauthorizedError extends AppError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthorizedError;
