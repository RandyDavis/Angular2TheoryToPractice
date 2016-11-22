/* OBJECT DESTRUCTURING */
const obj = {
    first: 'Randy',
    last: 'Davis',
    age: 36
};

// Pre-ES6
// const f = obj.first;
// const l = obj.last;
// console.log(f);
// console.log(l);

const {first, last} = obj;
console.log(first);
console.log(last);


/* ARRAY DESTRUCTURING */
const arr = ['a', 'b'];
const [x,y] = arr;
console.log(x);
console.log(y);

// Use case as function parameters
function f({x=0}) {
    console.log(x);
}
f({x, y: 1, z: 3});
f({});