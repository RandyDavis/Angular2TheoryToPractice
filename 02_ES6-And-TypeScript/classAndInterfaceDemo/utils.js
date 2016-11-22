// Export statement after declarations
// function square(x) {
//     return Math.pow(x, 2);
// }
//
// function cow() {
//     console.log('Mooooooo!');
// }
//
// export {square, cow};
"use strict";
// Can also prepend 'export' to front of declarations for same effect
// export function square(x) {
//     return Math.pow(x, 2);
// }
function cow() {
    console.log('Mooooooo!');
}
exports.cow = cow;
// Export using a 'default' syntax for most common function from a file
function square(x) {
    return Math.pow(x, 2);
}
exports.__esModule = true;
exports["default"] = square;
