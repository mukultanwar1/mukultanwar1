// var scope is function level not block level
// let scope is function level and block level both

// block level


var a = 10;

function myfun(){   
    var a = 20;
    let b = 30;
}

let b = 40;

console.log(a)
console.log(b)



