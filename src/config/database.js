require('dotenv').config();

module.exports = {
  port: process.env.DATABASE_PORT,
  dialect: process.env.DATABASE_DIALECT,
  host: process.env.DATABASE_HOSTNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB,
  username: process.env.DATABASE_USERNAME,
  timezone: '-03:00',
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};
