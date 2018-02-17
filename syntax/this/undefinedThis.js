// 출력함수
function print(){
	console.log(this.a);
}

// 전역변수 소실
var obj = {
		a : 2,
		print : print
};

var bar = obj.print;
var a = "print";

bar(); // undefined

// 메서드 체이닝 방법
var obj2 = {
		a:42,
		print:print
};

var obj1 = {
		a:2,
		obj2:obj2
};

obj1.obj2.print(); // 42