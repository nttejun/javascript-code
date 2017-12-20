// 왼쪽에서 오른쪽으로 순서로 계산해서 하나의 값을 반환
var sum = function sum(arr){
    return arr.reduce(function (a, b){
        return a+b;
    });
}

console.log(sum([10, 20, 30]));
