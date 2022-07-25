const { Contact } = require('../../models/index');
const { createError } = require("../../helpers");

const removeContact = async (req, res, next) => {
 try {
        const { contactId } = req.params;
        const result = await Contact.findByIdAndRemove(contactId);
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
