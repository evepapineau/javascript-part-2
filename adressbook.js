function Person (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = [];
}

function Email (address, type) {
    this.address = address;
    if (type === "work" || type === "home") {
                this.type = type;
            }
            else {
                this.type = "other";
            };
};

Person.prototype.addEmail = function (address, type) {
    this.email.push(new Email (address, type));
};

var eve = new Person ("Eve", "Papineau");

eve.addEmail("eve@gmail.com");
console.log(eve);

