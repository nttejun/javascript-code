// arguments 매개변수 개수 제한 없이 배열로 변환하는 객체
// 이 배열은 인덱스로 조회만 가능하며 삭제, 배열 메서드 사용에는 제한된다

// arguments 미사용
function nomal(x, y) {
    console.log(x, y);
}

nomal('출', '력', '성', '공');  // '출', '력', undefined, undefined
nomal('출력');    // '출력', undefined
nomal();    // undefined, undefined


// arguments 사용
function args() {
    return console.log(arguments);
}

args('success', 'arguments'); // ['success', 'arguments']
args();   // []

