/* eslint-disable newline-per-chained-call */
/* eslint-disable quotes */
const Joi = require('joi');

const phraseValidator = (phrase) => {
  const JoiSchema = Joi.object({
    author: Joi.string().min(4).required().messages({
      'string.empty': `author não pode ser vazio`,
      'string.base': `author tem que ser um campo string`,
      'string.min': 'author tem que possuir mais do que {#limit} caracteres.',
      'any.required': `author e um campo requerido`,
    }),
    phrase: Joi.string().min(4).required().messages({
      'string.empty': `phrase não pode ser vazio`,
      'string.base': `phrase que ser um campo string`,
      'string.min': 'phrase tem que possuir mais do que  {#limit} caracteres.',
      'any.required': `phrase e um campo requerido`,
    }),
  }).options({ abortEarly: false });

  return JoiSchema.validate(phrase);
};

module.exports = { phraseValidator };
