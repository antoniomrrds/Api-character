const Phrase = require('../models/Phrase');
const getRandomIntInclusive = require('../utils/random');

module.exports = {
  async randomPhrase() {
    const phrases = await Phrase.findAll({
      attributes: ['id', 'phrase', 'author'],
    });
    const index = getRandomIntInclusive(0, phrases.length - 1);
    return phrases[index];
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
