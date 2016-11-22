
// let obj = {key: "value", a: 1}

// console.log(obj.key);
// console.log(obj['a']);

// let base = {a: 1, b:2}
// let obj = Object.create(base);
// obj['c'] = 3;

// console.log(obj.a);  // 1

// let obj = {'__proto__': 1, b: 2};
// for (prop in obj) {
//   if(obj.hasOwnProperty(prop)) {
//     console.log(prop);
//   }
// }


/******** MAP *********/
// NOTE: Map will always record the ORDER of the data within the array


// create and chain a Map
// let map = new Map()
//   .set("A", 1)
//   .set("B", 2)
//   .set("C", 3);

// create and initialize Map w/values and common map functions
// let map = new Map([
//   ['A', 1],
//   ['B', 2],
//   ['C', 3]
// ]);
// console.log(map.get('A'));
// console.log(map.has('D'));
// console.log(map.delete('A'));
// console.log(map.size);
// console.log(map.clear());
// console.log(map.size);

// let map = new Map([
//   ['APPLE', 1],
//   ['ORANGE', 2],
//   ['MANGO', 3]
// ]);
// // map.keys()
// for (let key of map.keys()) {
//   console.log(key);
// }
// // map.values()
// for (let value of map.values()) {
//   console.log(value);
// }
// // map.entries() -- ENTRIES FUNCTION is actually the default of map when looping
// for (let entry of map.entries()) {
//   console.log(entry[0], entry[1]);
// }
// // map.entries() via destructuring
// for (let [key, value] of map.entries()) {
//   console.log(key, value);
// }
// // default of map.entries() -- returns the exact same as previous example
// for (let[key, value] of map) {
//   console.log(key, value);
// }


/********* SET ************/
// NOTE: Set only store KEYS, not key value pairs
// NOTE: Set only stores UNIQUE values as well
// NOTE: Set will also record the order when looping just like Map

// create and chain methods to SET
// let set = new Set()
//   .add('Apple')
//   .add('Orange')
//   .add('Mango');

// create and initialize to SET
let set = new Set(
    ['Apple','Orange','Mango']
);

// console.log(set.has("Apple"));
// console.log(set.has('Banana'));
// console.log(set.size);
// console.log(set.delete('Apple'));
// console.log(set.size);
// set.clear();
// console.log(set.size);

// Looping over a Set
for (let entry of set) {
    console.log(entry);
}
