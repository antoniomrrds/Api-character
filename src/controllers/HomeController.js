class HomeController {
  index(req, res) {
    res.status(200).json('Api Phrases');
  }
}

module.exports = new HomeController();
