const { DataTypes } = require('sequelize');
const connection = require('../database/database');

const Phrase = connection.define('phrase', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phrase: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Phrase.sync();

module.exports = Phrase;
