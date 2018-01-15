// instance data ready
function Point(x, y) {
    this.x = x;
    this.y = y;
}

function Plus(x, y){
    this.x = x;
    this.y = y;
}

// method
Point.prototype.dist = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
}

// method
Plus.prototype.plus = function(){
    return (this.x + this.y);
}

//execution
var p = new Point(3, 5);
console.log(p.x);
console.log(p.dist());

// execution
var p = new Plus(10, 10);
console.log(p.plus());
