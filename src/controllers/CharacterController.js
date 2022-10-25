const Character = require('../models/Character');
const { validateCharacter } = require('../validation/character-joi');
const { validateID } = require('../validation/id-joi');
class CharacterController {
  async index(req, res) {
    try {
      const characters = await Character.findAll();
      return res.status(200).json(characters);
    } catch (e) {
      res.status(500).json({ errors: ['ocorreu um erro interno'] });
    }
  }

  async create(req, res) {
    try {
      const { name, about, imaginary_universe, age } = req.body;

      const data = {
        name,
        about,
        imaginary_universe,
        age,
      };

      const {error} = validateCharacter(data);
      const errors = [];
      if (error) {
        errors.push(error.details.map((e) => e.message));
        res.status(400).json({ errors: errors });
        return;
      }

      const newCharacter = await Character.create(data);
      res.status(201).json(newCharacter);
    } catch (e) {
      res.status(500).json({ errors: ['ocorreu um erro interno'] });
    }
  }

  async show(req, res) {
    try{
      const {id} = req.params;
      const {error} = validateID(id);
      const errors = [];
      if (error) {
        errors.push(error.details.map((e) => e.message));
        res.status(400).json({ errors: errors });
        return;
      }
      const result = await Character.findByPk(id);
      return (result !== null)? res.status(200).json(result): res.status(400).json({ errors: ['Personagem não encontrado !'] });
    }catch(e){
      console.error(e)
      res.status(500).json({ errors: ['ocorreu um erro interno'] });
    }
  }

  // async update(req, res) {}

  // async delete(req, res) {}
}

module.exports = new CharacterController();
