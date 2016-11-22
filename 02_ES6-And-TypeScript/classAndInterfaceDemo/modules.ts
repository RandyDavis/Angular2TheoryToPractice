// Import specific things from a file
// import { square as sqr, cow } from './utils';
//
// console.log(sqr(2));
// cow();

// Import EVERYTHING from a file
// import * as utils from "./utils"
// console.log(utils.square(2));
// utils.cow();


// Import using Default from exported file
import square, {cow} from "./utils"
console.log(square(2));
cow();