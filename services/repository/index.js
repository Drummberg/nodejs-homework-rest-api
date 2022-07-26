const { Contact } = require('../../models');

const getAll = async () => {
    const data = await Contact.find();
        return data;
    };

const getContactById = async (contactId) => {
    const data = await Contact.findById(contactId);
    return data;
};

const addContact = async (body) => {
    const data = await Contact.create(body);
    return data;
};

const removeContact = async (contactId) => {
    const data = await Contact.findByIdAndRemove(contactId);
    return data;
};

const updateContact = async (contactId, body) => {
    const data = await Contact.findByIdAndUpdate(
        contactId,
        { ...body },
        { new: true });
    return data;
};

const updateStringContact = async (contactId, value) => {
    const data = await Contact.findByIdAndUpdate(
        contactId, value,
        { new: true });
    return data;

}
    
module.exports = {
    getAll,
    getContactById,
    addContact,
    removeContact,
    updateContact,
    updateStringContact
}