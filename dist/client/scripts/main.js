"use strict";
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = {
            firstName: firstName,
            lastName: lastName
        };
    }
    return Person;
}());
window.addEventListener('DOMContentLoaded', function () {
    var p = new Person('Hello', 'World');
    console.log("Hello, " + p.fullName);
});
//# sourceMappingURL=main.js.map