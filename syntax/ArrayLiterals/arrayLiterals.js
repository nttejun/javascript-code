// Array literals
var arr = ["1", "2", "3"];

// Array method
arr[0];
arr.unshift("0");
arr[0];
arr.indexOf("0");
console.log(arr.slice(0, 2));

// Array Circuit first test
['1', '2', '3'].forEach(
    function (element, index) {
        console.log(index + " " + element);
    }
)

// Array Circuit second test
arr.forEach(
    function (element, index) {
        console.log(index + " " + element);
    }
)

// Array Circuit third test
var arrCircuit = {

    name : "wonjun",
    age : 27,

    firstMethod : function(){
        [this.name, this.age].forEach(
            function (element, index) {
                console.log(index + " " + element);
            }
        )
    }
}

arrCircuit.firstMethod();
