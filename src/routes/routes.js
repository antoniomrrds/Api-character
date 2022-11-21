const router = require('express').Router();
const PhraseController = require('../controllers/PhraseController');
const HomeController = require('../controllers/HomeController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Phrase:
 *       type: object
 *       required:
 *         - phrase
 *         - author
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the  phrase
 *         phrase:
 *           type: string
 *           description: The phrase
 *         author:
 *           type: string
 *           description: The phrase author
 *       example:
 *         id: 1
 *         phrase: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 */

/**
 * @swagger
 * tags:
 *   name: Phrase
 *   description: The Phrase managing API
 */

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Returns the list of all the books
 *     tags: [Phrase]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Phrase'
 */

router.get('/', HomeController.index);

router.get('/phrase', PhraseController.index);
router.get('/phrase/:id', PhraseController.show);
router.post('/phrase', PhraseController.create);
router.put('/phrase/:id', PhraseController.update);
router.delete('/phrase/:id', PhraseController.delete);

router.get('/phraserandom', PhraseController.getRandomPhrase);

module.exports = router;
