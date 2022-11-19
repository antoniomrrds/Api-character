const errorStatus = (value, status, next) => {
  const err = new Error('Frase não encontrada');
  err.status = 404;
  return next(err);
};

module.exports = errorStatus;
