let ourArray = [1, 3, 5];

let a = ourArray[0];
let b = ourArray[1];
let c = ourArray[2];


function compare(a, b, c) {
    if (a < b && b < c) {
        return 0;
    } else {
        return 1;
    }
}


let results = compare(a, b, c);
console.log(results);


//-----------------------------------

let ourArray = [3, 5, 4];

let a = ourArray[0];
let b = ourArray[1];
let c = ourArray[2];


function compare(a, b, c) {
    if (a < b && b > c) {
        return 1;
    } else {
        return 0;
    }
}


let results = compare(a, b, c);
console.log(results);
