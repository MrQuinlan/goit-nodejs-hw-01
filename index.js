const { program } = require('commander');

const actions = require('./contacts');

program
    .option("-a, --action <type>", "contacts actions")
    .option("-i, --id <type>", "contact id")
    .option("-n, --name <type>", "contact name")
    .option("-p, --phone <type>", "contact phone")
    .option("-e, --email <type>", "contact email")

program.parse(process.argv);

const options = program.opts();


async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const contacts = await actions.listContacts();
      console.table(contacts);
      break;

    case 'get':
      const contact = await actions.getContactById(id);

      if(!contact){
          throw new Error(`Product with id=${id} not found`);
      }

      console.table(contact);

      break;

    case 'add':
      const newContact = await actions.addContact(name, email, phone);

      console.table(newContact);

      break;

    case 'remove':
      const removeContact = await actions.removeContact(id);

      console.table(removeContact);

      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

// invokeAction(options);
(async () => {
  await invokeAction(options);
})();