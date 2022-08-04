const util = require('util');
const A = "a different value A";
const B = "a different value B";
const m1 = require('./module1');
console.log(`A=${A} B=${B} values=${util.inspect(m1.values())}`);/*
This artificial example demonstrates encapsulation of the values in module1.js from
those in module2.js . The A and B values in module1.js don't
overwrite A and B in module2.js because they're encapsulated within module1.js .
The values function in module1.js does allow code in module2.js access to the
values; however, module2.js cannot directly access those values. We can modify the
object module2.js received from module1.js . But doing so does not change the
values within module1.js
*/

console.log(`${m1.A} ${m1.B}`);

const vals = m1.values();

vals.B = "something completely different";
console.log(util.inspect(vals));
console.log(util.inspect(m1.values()));