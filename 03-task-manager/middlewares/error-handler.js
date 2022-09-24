// const { AppError } = require('../errors/custom-error');

// const errorHandler = (error, req, res, next) => {
//   console.log(error);
//   if (error instanceof AppError) {
//     return res
//       .status(error.statusCode)
//       .json({ message: error.message });
//   }
//   return res
//     .status(500)
//     .json({ message: 'Something went wrong, please try again' });
// };

const errorHandler = (error, req, res, next) => {
  console.log(error);

  const status = error.statusCode || 500;
  const message = error.message || 'Something went wrong, please try again';

  return res.status(status).json({ message });
};

module.exports = errorHandler;
