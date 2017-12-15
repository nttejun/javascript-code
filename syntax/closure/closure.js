
// 클로저 경우 1 : 함수 자신이 속한 스코프에 있는 변수와 연결된 함수
function create(value){
    return function inner(){
        return value++;
    }
}

var output = create(1);
output(); // 1
output(); // 2