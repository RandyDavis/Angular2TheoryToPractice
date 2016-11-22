// fat arrow functions

// setTimeout(() => console.log("SetTimeout called!"), 1000);

// Multiline Fat Arrow Function
// let add = (a, b) => {
//   return a + b;
// }

// or on a Single line --- do NOT use return keyword when doing so
// let add = (a, b) => a + b;
// console.log(add(1,2));

// Common ways to use 'this' keyword within functions
// let obj = {
//   name: "Randy",
//   sayLater: function() {
//     let self = this;
//     setTimeout(function() {
//       console.log(self.name);
//     }, 1000)
//   }
// }
// obj.sayLater();

// 'this' original value is retained when using fat arrow function
let obj = {
    name: 'Jims',
    sayLater: function () {
        setTimeout(() => console.log(this.name), 1000)
    }
}
obj.sayLater();