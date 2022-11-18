const error404 = (req, res, next) => {
  const err = new Error('Rota não encontrada');
  err.status = 404;
  next(err);
};
module.exports = error404;
