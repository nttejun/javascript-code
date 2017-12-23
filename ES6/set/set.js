
let sets = new Set();
sets.add('1');
sets.add('2');

console.log(sets.values()); // {"1", "2"}
console.log(typeof sets.values() === "object"); //true
console.log(sets.has("1")); // true