// Оригинальные функции
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

// Промисифицируем
function f1Promise(x) {
    return new Promise(resolve => f1(x, resolve));
}
function f2Promise(x) {
    return new Promise(resolve => f2(x, resolve));
}
function f3Promise(x) {
    return new Promise(resolve => f3(x, resolve));
}
function f4Promise(x) {
    return new Promise(resolve => f4(x, resolve));
}
function f5Promise(x) {
    return new Promise(resolve => f5(x, resolve));
}
function f6Promise(x) {
    return new Promise(resolve => f6(x, resolve));
}

// Async/await версия
async function computeFwithAsync(x, funcs) {
    let sum = 0;
    
    for (let i = 0; i < funcs.length; i++) {
        let result = await funcs[i](x);
        sum += result;
        console.log(`Промежуточная сумма: ${sum}`);
    }
    
    console.log(`\nИТОГО: F(${x}) = ${sum}`);
    return sum;
}

async function testTask3() {
    // a. n = 2
    let funcs2 = [f1Promise, f2Promise];
    await computeFwithAsync(3, funcs2);
    
    // b. n = 4
    setTimeout(async () => {
        let funcs4 = [f1Promise, f2Promise, f3Promise, f4Promise];
        await computeFwithAsync(3, funcs4);
    }, 2000);
    
    // c. n = 6
    setTimeout(async () => {
        let funcs6 = [f1Promise, f2Promise, f3Promise, f4Promise, f5Promise, f6Promise];
        await computeFwithAsync(3, funcs6);
    }, 4000);
}

testTask3();