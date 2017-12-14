// 유효하지 않은 크기 예외처리
var exceptionIdSize = function exceptionID() {
    throw {
        name: "value looser",
        message: "retry"
    };
};

// 유효하지 않은 타입 예외처리
var exceptionIdType = function exceptionIdType() {
    throw {
        name: "invalid type",
        message: "retry"
    }
}

// 예외체크
function getID(id) {
    if (id < 0) {
        throw exceptionIdSize();
    }
    if (typeof id != "number") {
        throw exceptionIdType()
    }
    return {id: id};
}

// 입력 데이터 받는 함수
function getIDs(ids) {

    // 유효 데이터 저장공간
    var result = [];
    ids.forEach(function (ids) {

        try {
            var person = getID(ids);
            // 유효 데이터 저장
            result.push(person);
        } catch (exception) {
            console.log(exception);
        }
    });
    return result;
}


// 예외처리 결과
/*
    getIDs([3, 2, -1]);
    exceptionBasic.js:38 {name: "value looser", message: "retry"}
    (2) [{…}, {…}]

    getIDs([3, 2, "s"]);
    exceptionBasic.js:38 {name: "invalid type", message: "retry"}
    (2) [{…}, {…}]

    getIDs([3, 2, 1]);
    (3) [{…}, {…}, {…}]
    0: {id: 3}
    1: {id: 2}
    2: {id: 1}
    length: 3__proto__: Array(0)
*/
