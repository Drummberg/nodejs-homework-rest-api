const repository = require('../../services/repository');

const addContact = async (req, res) => {
    const result = await repository.addContact(req.body);
    res.status(201).json(result);
  }

module.exports = addContact;