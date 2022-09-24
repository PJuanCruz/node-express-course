class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
  }
}

module.exports = AppError;
