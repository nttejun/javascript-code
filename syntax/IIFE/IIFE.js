
// IIFE 함수를 블록처럼 사용
// IIFE 정의하고 바로 호출하는 즉시함수호출
(function () {
    var tmp = "Test";
}());

// 즉시함수호출 사용
var iife = [];
for(var i=0; i<5; i++){
    (function () {
        var value = i;
        iife.push(function () {return value});
    }());
}
console.log(iife[1]()); // 1

// 즉시함수호출 미사용
var notIife = [];
for(var i=0; i<5; i++){
    notIife.push(function(){return i});
}
console.log(notIife[1]());  // 5