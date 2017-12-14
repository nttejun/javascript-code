// not 원시타입 체크
var instanceofTest = function instanceofTest() {

    var arr = [];
    var arrStr = ["a", "b"];

    function Person(){};
    function Animail(){};

    var p = new Person();
    var a = new Animail();
    console.log(p instanceof Person);   // T
    console.log(a instanceof Person);   // F
    console.log(Person.prototype instanceof Object);    // T

    console.log(arr instanceof Object); // T
    console.log(arrStr instanceof Array);   // T
    console.log(arr instanceof Array);  // T
    console.log(arrStr instanceof Object);  // T

}

instanceofTest();

// 원시타입 체크
var notInstanceofTest = function notInstanceofTest() {

    //원시타입
    var str = "문자";
    var number = 10;
    var boolean = true;
    var nullType = null;
    var undefined = undefined;

    console.log(str instanceof String); // F
    console.log(str instanceof Object); // F

    console.log(number instanceof Object);  // F
    console.log(number instanceof Array);   // F
    console.log(boolean instanceof Boolean);    // F
    console.log(undefined instanceof Object); // F
    console.log(nullType instanceof undefined); // Error

}

notInstanceofTest();