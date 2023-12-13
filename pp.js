let sortContacts = function (contacts, sortBy) {
    switch (sortBy) {
        case 'name':
            contacts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'phone':
            contacts.sort((a, b) => a.phone.localeCompare(b.phone));
            break;
        case 'email':
            contacts.sort((a, b) => a.email.localeCompare(b.email));
            break;
        default:
            console.log('Invalid sort option');
            break;
    }
};

let userSortOption = prompt('Enter sort option: (name/phone/email)');
sortContacts(contacts, userSortOption);
showAllContacts(contacts);