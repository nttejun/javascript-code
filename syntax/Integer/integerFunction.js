// 상수정의
Number.MAX_SAFE_INTEGER = Math.pow(2, 53)-1;
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// 정수확인 함수
Number.isSafeInteger = function(n){
    return (typeof n === 'number' && Math.round(n) === n && Number.MIN_SAFE_INTEGER <= n && n <= Number.MAX_SAFE_INTEGER);
}

console.log(Number.isSafeInteger(21.34));
console.log(Number.isSafeInteger(21));

// 정수로 변환
console.log(Math.round(21.34));
console.log(Math.ceil(2.1));

// 32비트 정수로 변환
function ToInt32(x){
    return x | 0;
}

console.log(ToInt32(9999900000009.9));