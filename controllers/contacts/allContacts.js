const repository = require('../../services/repository');

const allContacts = async (req, res, next) => {
  const contacts = await repository.getAll(req);
    res.json({
        status: 'success',
        code: 200,
        payload: { contacts }
    });
}

module.exports = allContacts;