const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");

const contactsPath = path.join(__dirname, "contacts.json");

// @ GET /api/contacts //
  const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

// @ GET /api/contacts/:id //
  const getContactById = async (contactId) => {
  const contacts = await listContacts();
    const result = contacts.find(contact => contact.id === contactId);
    if (!result) {
    return null;
  }
  return result;
};

const updateContact = async (contactId, body) => {
  await fs.writeFile(contactsPath, JSON.stringify(contactId, body));
};

// @ POST /api/contacts //
  const addContact = async (body) => {
  const contacts = await listContacts();
  const newContact = { id: v4(), ...body };
  contacts.push(newContact);
  await updateContact(contacts);
  return newContact;
};

// @ DELETE /api/contacts/:id //
  const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const result = contacts.findIndex(contact => contact.id === contactId);
    
  if (result === -1) {
    return null;
  }
    
  const newContacts = contacts.filter((_, index) => index !== result);
  await updateContact(newContacts);
  return contacts[result];
};

// @ PUT /api/contacts/:id //
  const updateContactById = async (id, { name, email, phone }) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex(item => item.id === id);
  if (idx === -1) {
    return null;
  }
  contacts[idx] = { id, name, email, phone };
  await updateContact(contacts);
  return contacts[idx];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContactById,
}
