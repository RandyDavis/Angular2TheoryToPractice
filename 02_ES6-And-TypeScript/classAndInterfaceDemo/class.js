class Person {
    // protected firstName = "";
    // private lastName = "";
    // constructor(firstName, lastName) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }
    // Constructor initialized w/Access modifiers from above
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    name() {
        return `${this.firstName} ${this.lastName}`;
    }
    whoAreYou() {
        return `Hi I'm ${this.name()}`;
    }
}
let mike = new Person("Michael", "Davis");
console.log(mike.firstName);
class Student extends Person {
    constructor(firstName, lastName, course) {
        super(firstName, lastName);
        this.course = "";
        this.course = course;
    }
    whoAreYou() {
        return `${super.whoAreYou()} and I'm studying ${this.course}.`;
    }
    test() {
        console.log(this.firstName);
    }
}
let randy = new Person("Randy", "Davis");
console.log(randy.whoAreYou());
let jim = new Student("Jim", "Henson", "Angular 2");
console.log(jim.whoAreYou());
