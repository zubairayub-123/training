


console.log(__dirname,__filename);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    welcome() {
        console.log(`My name is ${this.name} and age is ${this.age}`);
    }
}

module.exports = Person;