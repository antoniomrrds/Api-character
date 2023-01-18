/* eslint-disable max-len */
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
 *           description: The author of the phrase
 *       example:
 *         id: 1
 *         phrase: 'Covarde não é aquele que evita um combate, covarde é aquele que mesmo sabendo que é superior luta e fere o mais fraco.'
 *         author: Bruce Lee
 */

router.get('/', HomeController.index);
/**
 * @swagger
 * tags:
 *   name: Phrase
 *   description: The Phrase managing API
 */

router.get('/phrase', PhraseController.index);

/**
 * @swagger
 * /phrase:
 *   get:
 *     summary: Returns the list of all the phrase
 *     tags: [Phrase]
 *     responses:
 *       200:
 *         description: The list of the phrase
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Phrase'
 *       500:
 *        description: Some error happened
 */

router.get('/phrase/:id', PhraseController.show);

/**
 * @swagger
 * /phrase/{id}:
 *   get:
 *     summary : Get The Phrase by id
 *     tags: [Phrase]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: The phrase id
 *     responses:
 *       200:
 *         description: The Phrase description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Phrase'
 *       400:
 *         description: Malformed request syntax
 *       404:
 *         description: The phrase was not found
 *       500:
 *         description: Some error happened
 */

router.post('/phrase', PhraseController.create);

/**
 * @swagger
 * /phrase:
 *   post:
 *      summary : Create a new phrase
 *      tags: [Phrase]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schema/Phrase'
 *      responses:
 *        201:
 *          description: The phrase was successfully created
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Phrase'
 *        500:
 *         description: Some error happened
 */

router.put('/phrase/:id', PhraseController.update);
router.delete('/phrase/:id', PhraseController.delete);

router.get('/phraserandom', PhraseController.getRandomPhrase);

module.exports = router;
