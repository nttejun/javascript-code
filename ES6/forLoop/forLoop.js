// for .. of .. Case
// Case1 Basic
(function () {

    let arr = [1, 2, 3, 4, 5];

    for (let index of arr) {
        console.log(index);
    }

}());

// Case2 Find sum value
(function () {

    let sum = 0;
    let arr = [1, 2, 3, 4, 5];

    for (let index of arr) {
        sum += index;
    }
    console.log(sum);
})

// Case3 Find max value
(function () {

    let arr = [1, 2, 3, 4, 5];
    console.log(Math.max(...arr));

}());

// Case4 Use arrow function
(function () {

    let arr = (arr) => {
        let sum = 0;
        for (let index of arr)
            sum += index;
        return sum;
    }
    console.log(arr([10, 20, 30, 40, 50]));

}());

// Case5 Use ... to make object
(function () {

    let arr = (...arr) => {
        let sum = 0;
        for (let index of arr)
            sum += index;
        return sum;
    }
    console.log(arr(1, 2, 3, 4, 5));

}());
