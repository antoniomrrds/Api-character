const router = require('express').Router();
const PhraseController = require('../controllers/PhraseController');
const HomeController = require('../controllers/HomeController');

router.get('/', HomeController.index);

router.get('/phrase', PhraseController.index);
router.get('/phrase/:id', PhraseController.show);
router.post('/phrase', PhraseController.create);
router.put('/phrase/:id', PhraseController.update);
router.delete('/phrase/:id', PhraseController.delete);

router.get('/phraserandom', PhraseController.getRandomPhrase);

module.exports = router;
