// x, y 값이 null 또는 undefined 아니라면 x값을 반환, y값을 반환
var optionalParameter = function optionalParameter(x, y){
    x = x || 0;
    y = y || 0;
    return [x, y];
}