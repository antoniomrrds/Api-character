const router = require('express').Router();
const PharseController = require('../controllers/PharseController');
const HomeController = require('../controllers/HomeController');

router.get('/', HomeController.index);

router.get('/phrase', PharseController.index);
router.get('/phrase/:id', PharseController.show);
router.post('/phrase', PharseController.create);
router.put('/phrase/:id', PharseController.update);
router.delete('/phrase/:id', PharseController.delete);

module.exports = router;
