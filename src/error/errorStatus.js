const errorStatus = (value, status, next) => {
  const err = new Error(value);
  err.status = status;
  return next(err);
};

module.exports = errorStatus;
