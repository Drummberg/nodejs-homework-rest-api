const repository = require('../../services/repository');
const { createError } = require("../../helpers");

const updateStringContact = async (req, res, next) => {
        const result = await repository.updateStringContact(req.params.contactId, req.value);
        if(!result) {
            throw createError(404);
        }
        res.json(result);
} 
    
module.exports = updateStringContact;