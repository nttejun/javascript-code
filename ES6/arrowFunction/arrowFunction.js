// arrow function define
let arrowFunction = () => {
    console.log("arrow function");
}

let arrowFuntionParam = (a, b) => {
    console.log(a, b);
}

// existing function define
let nomalFunction = function nomalFunction() {
    console.log("nomal function");
}

let nomalFunctionParam = function nomalFunctionParam (a, b) {
    console.log(a, b);
}
    
let defaultParameterB = (a = 10, b) => {
    return a + b;
}

let defaultParameterA = (a, b = 10) => {
    return a + b;
}

// default Parameter fail case
defaultParameterB(100);  // 100

// default Parameter success case
defaultParameterA(100);  // 110

