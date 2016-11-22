// Import specific things from a file
// import { square as sqr, cow } from './utils';
//
// console.log(sqr(2));
// cow();
"use strict";
// Import EVERYTHING from a file
// import * as utils from "./utils"
// console.log(utils.square(2));
// utils.cow();
// Import using Default from exported file
var utils_1 = require("./utils");
console.log(utils_1["default"](2));
utils_1.cow();
