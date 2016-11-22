//******* creating a decorator from scratch ***********/
// How to pass arguments to decorator
// NOTE: must compile decorators with 'tsc --experimentalDecorators <TSFILENAME.ts>; it will say properties don't exist but go ahead and run the file with 'node <TSFILENAME.js> and it should output properly
function Student (config) {
    return function (target) {
        Object.defineProperty(target.prototype, 'course', {value: () => config.course})
    }
}



@Student({
    course: 'Angular 2'
})
class Person {
    firstName;
    lastName;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let randy = new Person("Randy", "Davis");
// console.log(randy.course());