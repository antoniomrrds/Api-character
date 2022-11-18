const Phrase = require('../models/Phrase');
const { phraseValidator } = require('../validation/phrase-joi');
const { validateID } = require('../validation/id-joi');

module.exports = {
  async index(req, res, next) {
    try {
      const phrases = await Phrase.findAll({
        attributes: ['id', 'phrase', 'author'],
      });

      if (phrases.length <= 0) {
        const err = new Error('Frase não encontrada');
        err.status = 404;
        return next(err);
      }
      return res.status(200).json(phrases);
    } catch (e) {
      next(e);
    }
  },

  async create(req, res, next) {
    try {
      const { author, phrase } = req.body;

      const data = {
        author,
        phrase,
      };

      const { error } = phraseValidator(data);

      if (error) {
        res.status(400).json({ errors: error.details.map((e) => e.message) });
        return;
      }

      const newPhrase = await Phrase.create(data);
      res.status(201).json(newPhrase);
    } catch (e) {
      next(e);
    }
  },

  async show(req, res, next) {
    try {
      const { id } = req.params;
      const { error } = validateID(id);
      if (error) {
        res.status(400).json({ errors: error.details.map((e) => e.message) });
        return;
      }
      const phrase = await Phrase.findByPk(id);

      if (phrase == null) {
        const err = new Error('Frase não encontrada');
        err.status = 404;
        next(err);
        return;
      }

      return res.status(200).json(phrase);
    } catch (e) {
      next(e);
    }
  },

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { error } = validateID(id);
      const { author, phrase } = req.body;

      if (error) {
        res.status(400).json({ errors: error.details.map((e) => e.message) });
        return;
      }

      const phraseID = await Phrase.findByPk(id);

      if (phraseID == null) {
        const err = new Error('Frase não encontrada');
        err.status = 404;
        next(err);
        return;
      }

      const data = {
        author,
        phrase,
      };

      const responseData = phraseValidator(data);

      if (responseData.error) {
        res.status(400).json({ errors: responseData.error.details.map((e) => e.message) });
        return;
      }
      await Phrase.update(data, {
        where: {
          id,
        },
      });
      return res.status(200).json({ msg: 'Frase atualizada com sucesso !' });
    } catch (e) {
      next(e);
    }
  },

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const { error } = validateID(id);
      if (error) {
        res.status(400).json({ errors: error.details.map((e) => e.message) });
        return;
      }
      const phraseID = await Phrase.findByPk(id);
      if (phraseID == null) {
        const err = new Error('Frase não encontrada');
        err.status = 404;
        next(err);
        return;
      }

      phraseID.destroy();
      return res.status(200).json({ msg: 'Frase deletada com sucesso' });
    } catch (e) {
      next(e);
    }
  },
};
