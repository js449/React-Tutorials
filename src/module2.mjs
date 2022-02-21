//when importing only one component
// import thin from './module1.mjs'
// console.log(thin);

//when importing more than one componets from a module
// import thin, {a, c, d} from './module1.mjs' // including thin
// console.log(thin);
// console.log(a);
// console.log(c);
// console.log(d);

import {a, c, d} from './module1.mjs' // including thin
// console.log(thin);
console.log(a);
console.log(c);
console.log(d);

//Note - we use curly braces when something we cannot import by default from other module(javascript concept)