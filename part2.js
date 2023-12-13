let contacts = [
    {
        name: "Maxwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    },
    {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
    },
    {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
    }
];
function showContact(contacts, index) {
    if (contacts instanceof Array && index >= 0 && index < contacts.length) {
        const contact = contacts[index];
        console.log(`Name: ${contact.name}`);
        console.log(`Phone: ${contact.phone}`);
        console.log(`Email: ${contact.email}`);
    } else {
        console.log("Invalid arguments for showContact function.");
    }
}
function showAllContacts(contacts) {
    if (contacts instanceof Array) {
        contacts.forEach((contact, index) => {
            console.log(`${index + 1}`);
            showContact(contacts, index);
            console.log("-------------------------");
        });
    } else {
        console.log("Invalid argument for showAllContacts function.");
    }
}
function addNewContact(contacts, name, phone, email) {
    if (contacts instanceof Array && name && phone && email) {
        const newContact = {
            name: name,
            phone: phone,
            email: email
        };
        contacts.push(newContact);
        console.log("New contact added successfully!");
    } else {
        console.log("Invalid arguments for addNewContact function.");
    }
}
showAllContacts(contacts);
addNewContact(contacts, "Bebe rexha", "123-456-7890", "nkusi@example.com");