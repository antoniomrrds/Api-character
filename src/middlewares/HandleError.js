const ErrorHandler = (err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      status: err.status || 500,
      msg: err.message,
    },
  });
};

module.exports = ErrorHandler;
