const handleRouteNotFound = (req, res, next) => {
  const err = new Error('Rota não encontrada');
  err.status = 404;
  next(err);
};
module.exports = handleRouteNotFound;
