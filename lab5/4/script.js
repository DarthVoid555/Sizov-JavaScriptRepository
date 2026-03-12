function createSumProcessor(initialNumber) {
    return new Promise((resolve, reject) => {
        if (initialNumber === undefined || typeof initialNumber !== 'number') {
            reject('Ошибка: первый аргумент должен быть числом');
            return;
        }
        
        let currentSum = initialNumber;
        let callCount = 0;
        let intervalId;
        
        console.log(`Начальное число: ${initialNumber}`);
        
        intervalId = setInterval(() => {
            callCount++;
            
            if (callCount === 1) {
                console.log(`Итерация ${callCount}: текущая сумма = ${currentSum}`);
            } else {
                currentSum += initialNumber;
                console.log(`Итерация ${callCount}: ${currentSum - initialNumber} + ${initialNumber} = ${currentSum}`);
            }
            
            if (callCount >= 5) {
                clearInterval(intervalId);
                console.log(`\n Завершено после 5 итераций. Итоговая сумма: ${currentSum}`);
                resolve(currentSum);
            }
        }, 2000);
    });
}


console.log('=== ТЕСТ С УСПЕХОМ ===\n');

createSumProcessor(3)
    .then(result => {
        console.log(`\nПромис завершен с результатом: ${result}`);
    })
    .catch(error => {
        console.log(`Ошибка: ${error}`);
    });

setTimeout(() => {
    console.log('=== ТЕСТ С ОШИБКОЙ undefined ===\n');
    
    createSumProcessor(undefined)
        .then(result => {
            console.log(`Промис завершен с результатом: ${result}`);
        })
        .catch(error => {
            console.log(`Ошибка: ${error}`);
        });
}, 12000);

setTimeout(() => {
    console.log('=== ТЕСТ С ОШИБКОЙ "не число" ===\n');
    
    createSumProcessor('5')
        .then(result => {
            console.log(`Промис завершен с результатом: ${result}`);
        })
        .catch(error => {
            console.log(`Ошибка: ${error}`);
        });
}, 14000);