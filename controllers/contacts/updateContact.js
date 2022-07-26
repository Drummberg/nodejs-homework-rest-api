const repository = require('../../services/repository');
const { createError } = require("../../helpers");

const updateContact = async (req, res, next) => {
        const result = await repository.updateContact(req.params.contactId, req.body);
        if(!result) {
            throw createError(404);
        }
        res.json(result);
    } 

module.exports = updateContact;