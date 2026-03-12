// Оригинальные асинхронные функции
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


// ПРОМИСИФИКАЦИЯ

function f1Promise(x) {
    return new Promise(resolve => {
        f1(x, resolve);
    });
}

function f2Promise(x) {
    return new Promise(resolve => {
        f2(x, resolve);
    });
}

function f3Promise(x) {
    return new Promise(resolve => {
        f3(x, resolve);
    });
}

function f4Promise(x) {
    return new Promise(resolve => {
        f4(x, resolve);
    });
}

function f5Promise(x) {
    return new Promise(resolve => {
        f5(x, resolve);
    });
}

function f6Promise(x) {
    return new Promise(resolve => {
        f6(x, resolve);
    });
}

//Решение с промисами
function computeWithPromises(x, funcs) {
    let sum = 0;
    let promise = Promise.resolve();
    
    funcs.forEach(func => {
        promise = promise.then(() => {
            return func(x).then(result => {
                sum += result;
                console.log(`Промежуточная сумма: ${sum}`);
            });
        });
    });
    
    promise.then(() => {
        console.log(`\nИТОГО: F(${x}) = ${sum}`);
    });
    
    return promise;
}


console.log("a. n = 2");
let funcs2 = [f1Promise, f2Promise];
computeWithPromises(3, funcs2).then(() => {
    
    setTimeout(() => {
        console.log("\nb. n = 4");
        let funcs4 = [f1Promise, f2Promise, f3Promise, f4Promise];
        computeWithPromises(3, funcs4).then(() => {
            
            setTimeout(() => {
                console.log("\nc. n = 6");
                let funcs6 = [f1Promise, f2Promise, f3Promise, f4Promise, f5Promise, f6Promise];
                computeWithPromises(3, funcs6);
            }, 2000);
        });
    }, 2000);
});