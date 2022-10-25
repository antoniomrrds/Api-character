class HomeController {
  index(req, res) {
    res.status(200).json('Api Characters');
  }
}

module.exports = new HomeController();
