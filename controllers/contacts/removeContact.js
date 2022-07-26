const repository = require('../../services/repository');
const { createError } = require("../../helpers");

const removeContact = async (req, res, next) => {
 try {
        const result = await repository.removeContact(req.params.contactId);
        if(!result){
            throw createError(404)
        }
        res.json({
            message: "Book deleted"
        })
    } catch (error) {
        next(error);
    }
}

module.exports = removeContact;
