
let array = [1, 2 ,3];
/* ES5 Looping */
// array.forEach(function(value) {
//   console.log(value)
// })

// OR
// for (var i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// for in - used for looping over object properties and NOT for arrays (not recommended)
// let obj = {a: "A", b: "B"};
// for (let prop in obj) {
//   console.log(prop);
//   console.log(obj[prop]);
// }


/* ES6 Looping */
let arr = [10, 20, 30];
for (let value of arr) {
    console.log(value);
}