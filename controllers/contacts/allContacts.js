const { Contact } = require('../../models/index');

const allContacts = async (req, res) => {
  const result = await Contact.find();
    res.json({
        status: 'success',
        code: 200,
        data: { result }
    });
}

module.exports = allContacts;