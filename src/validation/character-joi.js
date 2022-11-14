/* eslint-disable newline-per-chained-call */
/* eslint-disable quotes */
const Joi = require('joi');

const validateCharacter = (character) => {
  const JoiSchema = Joi.object({
    name: Joi.string().min(4).required().messages({
      'string.empty': `name não pode ser vazio`,
      'string.base': `name tem que ser um campo string`,
      'string.min': 'name tem que possuir mais do que {#limit} caracteres.',
      'any.required': `name e um campo requerido`,
    }),

    about: Joi.string().min(4).required().messages({
      'string.empty': `about não pode ser vazio`,
      'string.base': `about que ser um campo string`,
      'string.min': 'about tem que possuir mais do que  {#limit} caracteres.',
      'any.required': `about e um campo requerido`,
    }),
    imaginary_universe: Joi.string().min(2).required().messages({
      'string.empty': `imaginary_universe não pode ser vazio`,
      'string.base': `imaginary_universe que ser um campo string`,
      'string.min': 'imaginary_universe em que possuir mais do que  {#limit} caracteres.',
      'any.required': `imaginary_universe e um campo requerido`,
    }),
    age: Joi.number().integer().min(1).required().messages({
      'number.empty': `age não pode ser vazia`,
      'number.base': `age tem que ser um inteiro`,
      'number.integer': `age tem que ser um inteiro`,
      'number.min': 'age tem que ser maior do que  {#limit}.',
      'any.required': `age e um campo requerido`,
    }),
  }).options({ abortEarly: false });

  return JoiSchema.validate(character);
};

module.exports = { validateCharacter };
