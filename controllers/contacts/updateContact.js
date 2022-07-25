const { Contact } = require('../../models/index');
const { createError } = require("../../helpers");

const updateContact = async (req, res) => {
         const {contactId} = req.params;
        const result = await Contact.findByIdAndUpdate(contactId, req.body, {new: true});
        if(!result) {
            throw createError(404);
        }
        res.json(result);
    } 

module.exports = updateContact;