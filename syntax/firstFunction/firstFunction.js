// 일급함수
// 변수에 함수를 담다
var first1 = function (a) {
    return a * b;
}

// 일급함수 특징
// 함수가 함수를 인자로 받다
function first2(f2) {
    return f2();
}

console.log(first2(function () {
    return 10;
}));
console.log(first2(function () {
    return 20;
}));

function return_maker(a) {
    // 클로저, 순수함수
    return function (b) {
        return a + b;
    }
}

var add = return_maker(10);
console.log(add(10));

var add1 = return_maker(20);
console.log(add1(20));


// 함수형 프로그래밍 형태
function t4(t1, t2, t3) {
    return t3(t1() + t2());
}

console.log(t4(
    function () {
        return 2;
    },
    function () {
        return 1;
    },
    function (a) {
        return a * a;
    }
));
