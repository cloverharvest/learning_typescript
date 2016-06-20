var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.middleInitial + " " + person.lastName;
}
var user = { firstName: "Anna", middleInitial: "P", lastName: "Schwab" };
document.body.innerHTML = greeter(user);
