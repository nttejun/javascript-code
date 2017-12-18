function strict(){
    'use strict';
    var x = 10;
    x = 4;
    y = 10; // error
}

strict();

function notStrict(){
    var x = 10;
    x = 4;
    y = 10;
}

notStrict();