const { Contact } = require('../../models');

const getAll = async (req) => {
    const {_id} = req.user;    
    const {page = 1, limit = 20, favorite} = req.query;
    const skip = (page - 1) * limit;
    let query = {owner: _id, favorite};
    
    if (favorite) {
        query = {...query, favorite};
    }
    const result = await Contact.find(query, '', {skip, limit: Number(limit)}).populate('owner', '_id, name, email');
        return result;
    };

const getContactById = async (id) => {
    const data = await Contact.findById(id);
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