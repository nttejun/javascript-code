// 체크박스 이벤트 취소
document.querySelector("#id-checkbox").addEventListener("click", function(event){
    document.getElementById("output").innerHTML += "can not check";
    event.preventDefault();
},true);

// preventDefault 사용 submit 처리 함수
var sm = document.getElementById("sm").onsubmit = function (e) {

    alert("sm");

    // 전송 테스트
    var value = document.forms["sm"]["submitText"].value;
    alert(value);
    output();
    // preventDefault 메소드 사용하면 출력이 유지
    e.preventDefault();

}

// 출력 테스트 함수
var output = function output(){

    document.getElementById("text").innerHTML = "print data";

}




