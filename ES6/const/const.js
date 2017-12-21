// const 할당한 값은 변경할 수 없다
// const 정의된 스코프 내부에서만 유효하다
const CONST_VAL = "CONST_VAL";

(function () {

    /*
        //런타임 시점 에러
        console.log(constVal);
    */

    const CONST_VAL = "function CONST_VAL";

    /*
        //컴파일 시점 에러
        constVal = "changed const";
    */

    (function () {

        console.log(CONST_VAL); // function CONST_VAL

    }());

    console.log(CONST_VAL); // function CONST_VAL

}());

console.log(CONST_VAL); // CONST_VAL
