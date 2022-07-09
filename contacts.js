const fs = require("fs/promises");
const path = require("path");
const nanoid = require("nanoid");
const contactsPath = path.join(__dirname, "db/contacts.json");

async function updateContacts(contacts) {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
} 

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  const products = JSON.parse(data);
  
  return products;
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const result = contacts.find(contact => contact.id === contactId);

  if(!result){
      return null;
  }

  return result;

}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const contactIndex = contacts.findIndex(contact => contact.id === contactId);
  
  if(contactIndex === -1){
    return null;
  }
  
  const newContacts = contacts.filter((_,index) => index !== contactIndex);

  await updateContacts(newContacts);

  return contacts[contactIndex];
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = { id: nanoid(2), name, email, phone };
  
  contacts.push(newContact);

  await updateContacts(contacts);
  
  return newContact;
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
};