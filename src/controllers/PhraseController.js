const { errorPhrases } = require('../validation/phrase/phrase-joi');
const { errorsId } = require('../validation/id/id-joi');
const PhraseService = require('../services/Phrase.service');
const errorStatus = require('../utils/errorStatus');

module.exports = {
  async index(req, res, next) {
    try {
      const phrases = await PhraseService.getAll();
      if (phrases.length <= 0) {
        return errorStatus('Frase não encontrada', 404, next);
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

      const error = errorPhrases(data, res);
      if (error === false) {
        const newPhrase = await PhraseService.create(data);
        return res.status(201).json(newPhrase);
      }
    } catch (e) {
      next(e);
    }
  },

  async show(req, res, next) {
    try {
      const { id } = req.params;
      const errorID = errorsId(id, res);
      if (errorID === false) {
        const phrase = await PhraseService.findOne(id);

        if (phrase == null) {
          return errorStatus('Frase não encontrada', 404, next);
        }

        return res.status(200).json(phrase);
      }
    } catch (e) {
      next(e);
    }
  },

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { author, phrase } = req.body;
      const errorID = errorsId(id, res);
      if (errorID === false) {
        const phraseID = await PhraseService.findOne(id);

        if (phraseID == null) {
          return errorStatus('Frase não encontrada', 404, next);
        }

        const data = {
          author,
          phrase,
        };

        const errorPhrase = errorPhrases(data, res);
        if (errorPhrase === false) {
          await PhraseService.update(id, data);
          return res.status(200).json({ msg: 'Frase atualizada com sucesso !' });
        }
      }
    } catch (e) {
      next(e);
    }
  },

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const errorID = errorsId(id, res);

      if (errorID === false) {
        const phraseID = await PhraseService.findOne(id);
        if (phraseID == null) {
          return errorStatus('Frase não encontrada', 404, next);
        }

        phraseID.destroy();
        return res.status(200).json({ msg: 'Frase deletada com sucesso' });
      }
    } catch (e) {
      next(e);
    }
  },
  async getRandomPhrase(req, res, next) {
    try {
      const value = await PhraseService.randomPhrase();
      return res.json(value);
    } catch (e) {
      next(e);
    }
  },
};
