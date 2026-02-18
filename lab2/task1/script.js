//1
function subtractAndShow(a, b) {
    let result = a - b;
    console.log(a + "-" + b + " = " + result);
}

//2
function subtract(a, b) {
    return a - b;
}

// Проверка способов
console.log("=1=\n");

subtractAndShow(10, 3);
subtractAndShow(25, 7);
subtractAndShow(100, 50);

console.log("\n---\n");

console.log("=2=\n");
let res1 = subtract(15, 8);
console.log("15-8 = " + res1);

let res2 = subtract(33, 11);
console.log("33-11 = " + res2);

let res3 = subtract(50, 25);
console.log("50-25 = " + res3);