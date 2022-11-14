const Phrase = require('../models/Phrase');
const { validateCharacter } = require('../validation/character-joi');
const { validateID } = require('../validation/id-joi');

class PharseController {
  async index(req, res) {
    try {
      const pharses = await Phrase.findAll();
      return res.status(200).json(pharses);
    } catch (e) {
      return res.status(500).json({ errors: ['ocorreu um erro interno'] });
    }
  }

  async create(req, res) {
    try {
      const { name, phrase } = req.body;

      const data = {
        name,
        phrase,
      };

      const { error } = validateCharacter(data);

      if (error) {
        res.status(400).json({ errors: error.details.map((e) => e.message) });
        return;
      }

      const newPhrase = await Phrase.create(data);
      res.status(201).json({ newPhrase });
    } catch (e) {
      res.status(500).json({ errors: ['ocorreu um erro interno'] });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const { error } = validateID(id);
      if (error) {
        res.status(400).json({ errors: error.details.map((e) => e.message) });
        return;
      }
      const phrase = await Phrase.findByPk(id);
      return phrase !== null ? res.status(200).json({ phrase }) : res.status(404).json({ errors: ['Frase não encontrada !'] });
    } catch (e) {
      return res.status(500).json({ errors: ['ocorreu um erro interno'] });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { error } = validateID(id);
      const { name, phrase } = req.body;

      if (error) {
        res.status(400).json({ errors: error.details.map((e) => e.message) });
        return;
      }

      const character = await Phrase.findByPk(id);

      if (character == null) res.status(404).json({ errors: ['Personagem não encontrado !'] });
      const data = {
        name,
        phrase,
      };

      const responseData = validateCharacter(data);
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
    } catch (error) {
      return res.status(500).json({ errors: ['ocorreu um erro interno'] });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const { error } = validateID(id);
      if (error) {
        res.status(400).json({ errors: error.details.map((e) => e.message) });
        return;
      }
      const character = await Phrase.findByPk(id);
      if (character == null) return res.status(404).json({ errors: ['Frase não encontrada !'] });

      character.destroy();
      return res.status(200).json({ msg: 'Frase deletada com sucesso' });
    } catch (error) {
      return res.status(500).json({ errors: ['ocorreu um erro interno'] });
    }
  }
}

module.exports = new PharseController();
