const router = require('express').Router();
const CharacterController = require('../controllers/CharacterController');
const HomeController = require('../controllers/HomeController');

router.get('/', HomeController.index);

router.get('/character', CharacterController.index);
router.get('/character/:id', CharacterController.show);
router.post('/character', CharacterController.create);

module.exports = router;
