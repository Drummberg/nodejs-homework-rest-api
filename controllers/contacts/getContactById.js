const repository = require('../../services/repository');
const { createError } = require("../../helpers");

const getContactById = async (req, res, next) => {
    const { id } = req.params;
    const contact = await repository.getContactById(id);
    if (!contact) {
        throw createError(404);
    }
    res.json(contact)
}

module.exports = getContactById;