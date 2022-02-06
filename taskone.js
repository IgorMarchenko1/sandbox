function compare(num1, num2, num3) {
    if (num1 < num2 && num2 < num3) {
        return 0;
    }
    if (num1 > num2 && num2 > num3) {
        return 1;
    }
}


let results = compare(1, 3, 5);
console.log(results);

//-------------------------


function compare(num1, num2, num3) {
    if (num1 < num2 && num2 > num3) {
        return 1;
    }
    if (num1 > num2 && num2 < num3) {
        return 0;
    }
}


let results = compare(3, 5, 4);
console.log(results);

//---------------------------


function compare(num1, num2, num3) {
    if (num1 > num2 && num2 < num3) {
        return 1;
    }
    if (num1 < num2 && num2 > num3) {
        return 0;
    }
}


let results = compare(5, 4, 5);
console.log(results);

//-----------------------------

function compare(num1, num2, num3) {
    if (num1 < num2 && num2 < num3) {
        return 0;
    }
    if (num1 > num2 && num2 > num3) {
        return 1;
    }
}


let results = compare(4, 5, 7);
console.log(results);