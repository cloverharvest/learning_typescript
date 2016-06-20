class Student {
    fullName: string;
    constructor (public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    middleInitial: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.middleInitial + " " + person.lastName;
}

var user = { firstName: "Anna", middleInitial: "P", lastName: "Schwab" };

document.body.innerHTML = greeter(user);
