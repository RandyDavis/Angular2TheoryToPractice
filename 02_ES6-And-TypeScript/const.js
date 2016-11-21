// const
"use strict";
// function func() {
//   if (true) {
//     const tmp = 123;
//   }
//   console.log(tmp);
// }
// func();

// const foo = {};
// foo['prop'] = 'Mooo';
// console.log(foo);

const foo = Object.freeze({});
foo['prop'] = 'Mooo';
console.log(foo.prop);