interface FullName {
    firstName: string;
    lastName: string;
}

class Person {
    constructor(public firstName: string, public lastName: string) {
        this.fullName = {
            firstName,
            lastName
        };
    }

    fullName: FullName;
}

window.addEventListener('DOMContentLoaded', () => {
    const p = new Person('Hello', 'World');
    console.log(`Hello, ${p.fullName}`);
});