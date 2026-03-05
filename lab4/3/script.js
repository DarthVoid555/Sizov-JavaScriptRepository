function f1(x, callback) {
    setTimeout(() => {
        let res = x * x;
        console.log(`f1: ${x}^2 = ${res}`);
        callback(res);
    }, 500);
}

function f2(x, callback) {
    setTimeout(() => {
        let res = 2 * x;
        console.log(`f2: 2*${x} = ${res}`);
        callback(res);
    }, 300);
}

function f3(x, callback) {
    setTimeout(() => {
        let res = -2;
        console.log(`f3: -2 = ${res}`);
        callback(res);
    }, 700);
}

function f4(x, callback) {
    setTimeout(() => {
        let res = x + 5;
        console.log(`f4: ${x}+5 = ${res}`);
        callback(res);
    }, 400);
}

function f5(x, callback) {
    setTimeout(() => {
        let res = 3 * x - 1;
        console.log(`f5: 3*${x}-1 = ${res}`);
        callback(res);
    }, 600);
}

function f6(x, callback) {
    setTimeout(() => {
        let res = 10;
        console.log(`f6: 10 = ${res}`);
        callback(res);
    }, 200);
}

function computeSequentially(x, funcs, index = 0, sum = 0) {
    if (index >= funcs.length) {
        console.log(`\nИТОГО: F(${x}) = ${sum}`);
        return;
    }
    
    funcs[index](x, (result) => {
        let newSum = sum + result;
        console.log(`Промежуточная сумма: ${newSum}`);
        computeSequentially(x, funcs, index + 1, newSum);
    });
}

console.log("a. n = 2");
let funcs2 = [f1, f2];
computeSequentially(3, funcs2);

setTimeout(() => {
    console.log("\nb. n = 4");
    let funcs4 = [f1, f2, f3, f4];
    computeSequentially(3, funcs4);
}, 3000);

setTimeout(() => {
    console.log("\nc. n = 6");
    let funcs6 = [f1, f2, f3, f4, f5, f6];
    computeSequentially(3, funcs6);
}, 6000);