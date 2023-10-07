class DashboardController {
  index(req, res) {
    res.render("dashboard");
  }
}

module.exports = new DashboardController();
