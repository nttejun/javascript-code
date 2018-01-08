// 순수함수
function pure(a, b) {
    return a * b;
}

// 순수함수가 아니다
// 동일한 결과 1, 2를 출력하지 않는 함수
var notP = 10;

function notPure(a, b) {
    return b * notP;
}

// 결과 1
console.log(notPure(3, 4));

// 결과 2
notP = 20;
console.log(notPure(3, 4));

// 순수함수가 아니다
// 동일한 결과 1, 2를 출력하지 않는 함수
// 부수효과 : 외부 상태를 변경, 직접 변경
var notP1 = 100;

function notPure1(a, b) {
    notP1 = 200;
    return a * b;
}

// 결과 1
console.log(notP1);

// 결과 2
notPure1();
console.log(notP1);

// 순수함수가 아니다
// 외부에 영향을 미친다
// 동일한 결과 1, 2를 출력하지 않는 함수
var notP2 = { val : 1000 };
function notPure2() {
    notP2.val = 2000;
    notP2.val++;
}

console.log(notP2);
notPure2();
console.log(notP2);

// 순수함수
var obj1 = {val:10};
function pure1(obj, a) {
    return {val : obj.val + a}
}

console.log(pure1(obj1, 10));

var obj2 = pure1(obj1, 20);
console.log(obj1.val);
console.log(obj2.val);


