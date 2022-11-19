const Joi = require('joi');

const validateID = (id) => {
  const JoiSchema = Joi.number()
    .integer()
    .required()
    .min(0)
    .messages({
      'number.empty': 'Id não pode ser vazio',
      'number.base': 'Id tem que ser um inteiro',
      'number.min': 'Id tem que ser maior do que {#limit}.',
      'number.integer': 'Id tem que ser um inteiro',
      'number.required': 'Id e um campo requerido',
    })
    .options({ abortEarly: false });

  return JoiSchema.validate(id);
};

const errorsId = (data, res) => {
  const { error } = validateID(data);
  if (error) {
    res.status(400).json({ errors: error.details.map((e) => e.message) });
    return true;
  }
  return false;
};

module.exports = { errorsId };
