// array
(function () {

    let arr = [1, 2, 3, 4, 5];

    for (let index of arr) {
        console.log(index);
    }

}());

// ...array max
(function () {

    let arr = [1, 2, 3, 4, 5];

    console.log(Math.max(...arr));

}());
