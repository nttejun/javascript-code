
// let 정의된 스코프 내부에서만 유효

let letValue = "let";

var notLet = "var";

if(true){

    let letValue = "innerLet";

    var notLet = "innerVar";

    console.log(letValue);

    console.log(notLet);

    function letTest() {

        console.log(letValue + " function");

        return "1";

    };

}

console.log(letValue);

console.log(notLet);

letTest();
