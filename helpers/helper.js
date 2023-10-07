function setActiveMenu(req, res, next) {
  res.locals.isActive = (page) => (req.baseUrl == page ? "active" : "");
  next();
}

module.exports = setActiveMenu;
