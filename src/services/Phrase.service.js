const Phrase = require('../models/Phrase');

module.exports = {
  async randomPhrase() {
    const phrases = await Phrase.findAll({
      attributes: ['id', 'phrase', 'author'],
    });

    return phrases;
  },
  async getAll() {
    const phrases = await Phrase.findAll({
      attributes: ['id', 'phrase', 'author'],
      order: [['id', 'ASC']],
    });
    return phrases;
  },
  async create(data) {
    const phrase = await Phrase.create(data);
    return phrase;
  },
  async findOne(id) {
    const phrase = await Phrase.findByPk(id, {
      attributes: ['id', 'phrase', 'author'],
    });
    return phrase;
  },
  async update(id, data) {
    const phraseUpdated = await Phrase.update(data, {
      where: {
        id,
      },
    });
    return phraseUpdated;
  },
};
