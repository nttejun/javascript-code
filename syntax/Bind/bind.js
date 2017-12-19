var data = {
    value: 'sendData',
    describe: function () {
        return "Print " + this.value;
    }
};

// bind 로 선정한 함수의 원본 내용으로 바인딩된 함수를 생성한다
var bindFunc = data.describe.bind(data);
console.log(bindFunc());

// 함수의 메소드는 추출할 수 없다
var notBind = data.describe;
console.log(notBind()); // type error

