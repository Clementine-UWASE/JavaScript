# Declare variables for the prices and quantities of roses, lilies, and tulips
rose_price = 8
rose_quantity = 70

lily_price = 10
lily_quantity = 50

tulip_price = 2
tulip_quantity = 120

#
// Calculate the total price for each type of flower
total_rose_price = rose_price * rose_quantity
total_lily_price = lily_price * lily_quantity
total_tulip_price = tulip_price * tulip_quantity

# Calculate the total price for all flowers
total_flower_price = total_rose_price + total_lily_price + total_tulip_price

# Display the inventory information
print("Inventory Information:")
print("Roses: {} roses - Total Price: ${}".format(rose_quantity, total_rose_price))
print("Lilies: {} lilies - Total Price: ${}".format(lily_quantity, total_lily_price))
print("Tulips: {} tulips - Total Price: ${}".format(tulip_quantity, total_tulip_price))
print("\nTotal Flower Price: ${}".format(total_flower_price))

// table
var contact1 = {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
};

var contact2 = {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
};

var contact3 = {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
};

// Create an array to store all contacts
var contacts = [contact1, contact2, contact3];

// Display information about the first and last contact in the console
console.log("First Contact:");
console.log("Name: " + contacts[0].name);
console.log("Phone: " + contacts[0].phone);
console.log("Email: " + contacts[0].email);

console.log("\nLast Contact:");
console.log("Name: " + contacts[contacts.length - 1].name);
console.log("Phone: " + contacts[contacts.length - 1].phone);
console.log("Email: " + contacts[contacts.length - 1].email);