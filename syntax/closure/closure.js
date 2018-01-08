
// 클로저 경우 1 : 함수 자신이 속한 스코프에 있는 변수와 연결된 함수
function create(value){
    return function inner(){
        return value++;
    }
}

var output = create(1);
output(); // 1
output(); // 2

// 함수 내부함수 실행
function outter() {
    function inner(){
        var title = "inner";
        alert(title);
    }
    inner();
    otherOutter();
}

// 외부함수 내부함수로 접근불가
function otherOutter() {
    function otherInner(){
        var title = "other inner";
        alert(title);
    }
    otherInner();
}

// error case
// otherInner ()


// 내부함수 외부함수로 접근가능
function out () {
    var outVar = "out";
    function outInner (){
        alert(outVar);
        console.log(otherOut());
    }
    outInner();
}

function otherOut(){
    return "otherOut";
}

// private variable case
function factory_user(person) {
    return {
        get_person: function () {
            return person;
        },
        set_person: function (setPerson) {
            person = setPerson;
        }
    }
}

wonjun = factory_user("wonjun");
jeeyoen = factory_user("jeeyeon");

alert(wonjun.get_person());
alert(jeeyoen.get_person());

wonjun.set_person("wonjun2");
alert(wonjun.get_person());


// 일반함수호출실행
var arr = [];
for(var i=0; i<5; i++){
    arr[i] = function(){
        return i;
    }
}
for(var index in arr){
    console.log(arr[index]);
    alert(arr[index]());
}

// 즉시함수호출실행
var arr1 = [];
for(var i=0; i<5; i++){
    arr1[i] = function(value){
        return function(){
            return value;
        }
    }(i);
}

for(var index in arr1){
    alert(arr1[index]);
}
