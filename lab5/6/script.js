async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 10;
}

function f() {
    wait().then(result => {
        console.log('Результат:', result);
    });
}

f();
console.log('Эта строка выполнится до получения результата');