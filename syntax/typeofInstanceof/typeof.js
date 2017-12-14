// 원시타입 체크
var typeofTest = function typeofTest() {

    //원시타입
    var str = "문자";
    var number = 10;
    var boolean = true;
    var nullType = null;
    var undefined = undefined;

    console.log(typeof str);    // string
    console.log(typeof number); // number
    console.log(typeof boolean);    // boolean
    console.log(typeof nullType);   // object
    console.log(typeof undefined);  // undefined

}

typeofTest();

// not 원시타입 체크
var notTypeofTest = function notTypeofTest() {

    var arr = [];
    var arrStr = ["a", "b"];

    console.log(arr);   // Array(0)
    console.log(arrStr);    // Array(2)

}

notTypeofTest();