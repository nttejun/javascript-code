const arr = ['js', 'script', 'java'];

/*
    // const 할당된 메모리를 재할당 할 수 없다
    // 컴파일 시점 에러
    arr = ['js', 'script', 'java'];
*/

arr.push('java');

console.log(arr);   // ['js', 'script', 'java', 'java']
