let data = new Map();

data.set("first", 1);
data.set("second", 2);

console.log(data.get("first")); // 1
console.log(data.keys());   // {first, second}
console.log(data.keys() instanceof Object); // true

for (let key of data.keys()) {
    console.log(typeof key === "string");   // true
}

console.log(data.values()); // {1, 2}