const Phrase = require('../models/Phrase');
const getRandomIntInclusive = require('../utils/random');

module.exports = {
  async getAll() {
    const phrases = await Phrase.findAll({
      attributes: ['id', 'phrase', 'author'],
      order: [['id', 'ASC']],
    });
    return phrases;
  },
  async findOne(id) {
    const phrase = await Phrase.findByPk(id, {
      attributes: ['id', 'phrase', 'author'],
    });
    return phrase;
  },
  async create(data) {
    const phrase = await Phrase.create(data);
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
  async randomPhrase() {
    const phrases = await this.getAll();
    const index = getRandomIntInclusive(0, phrases.length - 1);
    return phrases[index];
  },
};
