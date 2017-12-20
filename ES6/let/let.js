
// 정의된 스코프 단계에서만 유효한 let

let letValue = "let";

var notLet = "var";

if(true){

    let letValue = "innerLet";

    var notLet = "innerVar";

    console.log(letValue);

    console.log(notLet);

}

console.log(letValue);

console.log(notLet);