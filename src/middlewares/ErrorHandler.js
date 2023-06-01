const ErrorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500;
  const errorMessage = err.message || 'Erro interno do servidor';

  res.status(statusCode).json({
    error: {
      status: statusCode,
      message: errorMessage,
    },
  });
};

module.exports = ErrorHandler;
