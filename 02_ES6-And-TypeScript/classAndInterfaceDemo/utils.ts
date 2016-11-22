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

// Can also prepend 'export' to front of declarations for same effect
// export function square(x) {
//     return Math.pow(x, 2);
// }

export function cow() {
    console.log('Mooooooo!');
}

// Export using a 'default' syntax for most common function from a file
export default function square(x) {
    return Math.pow(x, 2);
}