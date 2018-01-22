// parseInt(string, radix)
console.log(parseInt(10.5, 8));
console.log(parseInt(10.5, 10));
console.log(parseInt(10.5, 16));
console.log("--")
console.log(parseInt("011", 10));
console.log(parseInt("011"));
console.log(parseInt("10.5555"));
console.log(parseInt("012", 16));
console.log(parseInt("012"));

// Remainder
function isRemainder(n){
    return n % 2 === 1;
}

console.log(isRemainder(-3));
console.log(isRemainder(-7));

// Math.abs();
function isRemainderAbs(n){
    return Math.abs(n % 2) === 1;
}

console.log(isRemainderAbs(-3));
console.log(isRemainderAbs(-7));
console.log(isRemainderAbs(parseInt("-7")));
