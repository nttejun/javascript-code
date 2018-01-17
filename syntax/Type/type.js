var formData = {width : '100'};
var w = formData.width;
var outer = w + 20;

console.log(outer === 120);
console.log(outer === '10020');

var nw = Number(formData.width);

console.log(10 + nw);
console.log(nw + nw);

var str = String('str');

console.log(str);
console.log(typeof str);

var strNumber = String('12.345');
console.log(strNumber + 12.345);
console.log(typeof (strNumber + 12.345));

var obj = { foo : 123 };
console.log(Object(obj) === obj);

var primit = {};
console.log(primit.valueOf() === primit);
console.log(primit.toString());

