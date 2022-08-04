//here we are using ES6 module in Common Js module.

// async function simpleFn() {
//     const simple2 = await import('./simple2.mjs');//import() cant be used in global scope.because in the global scope we cant use await 
//     // cant use await keyword.Otherwise you will get fat ass error.
//     console.log(simple2.hello());
//     console.log(simple2.next());
//     console.log(simple2.next());
//     console.log(`count = ${simple2.default()}`);
//     console.log(`Meaning: ${simple2.meaning}`);
//     }
//     simpleFn().catch(err => { console.error(err); });
//best we can do is that...
import('./simple2.mjs')
.then(simple2 => {
console.log(simple2.hello());
console.log(simple2.next());
console.log(simple2.next());
console.log(`count = ${simple2.default()}`);
console.log(`Meaning: ${simple2.meaning}`);
})
.catch(err => {
console.error(err);
});
