const array = [
    [1, 2, 3, ],
    [4, 5, 6, ],
    [7, 8, 9]
];

function checkMatrix(matrix) {
    const latGroupStart = matrix[0].length - 3;

    for (let i = 0; i <= latGroupStart; i++) {
        const section = matrix.flatMap(row => row.slice(i, i + 3));
        const uniqueDigits = new Set(section);
        if (uniqueDigits.size < 9) return false;
    }

    return true;
}

console.log(checkMatrix(array));

//-----------------------
const array = [
    [2, 3, 2, ],
    [5, 5, 8, ],
    [8, 9, 4]
];

function checkMatrix(matrix) {
    const latGroupStart = matrix[0].length - 3;

    for (let i = 0; i <= latGroupStart; i++) {
        const section = matrix.flatMap(row => row.slice(i, i + 3));
        const uniqueDigits = new Set(section);
        if (uniqueDigits.size < 9) return false;
    }

    return true;
}

console.log(checkMatrix(array));

//------------------------
const array = [
    [3, 2, 7, ],
    [6, 8, 1, ],
    [9, 4, 5]
];

function checkMatrix(matrix) {
    const latGroupStart = matrix[0].length - 3;

    for (let i = 0; i <= latGroupStart; i++) {
        const section = matrix.flatMap(row => row.slice(i, i + 3));
        const uniqueDigits = new Set(section);
        if (uniqueDigits.size < 9) return false;
    }

    return true;
}

console.log(checkMatrix(array));