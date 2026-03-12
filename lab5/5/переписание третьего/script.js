// Функция, возвращающая промис для суммирования
function createSumProcessor(initialNumber) {
    return new Promise((resolve, reject) => {
        if (initialNumber === undefined || typeof initialNumber !== 'number') {
            reject('Ошибка: аргумент должен быть числом');
            return;
        }
        
        let currentSum = initialNumber;
        let callCount = 0;
        let intervalId;
        
        
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
                console.log(`Завершено после 5 итераций. Итоговая сумма: ${currentSum}`);
                resolve(currentSum);
            }
        }, 2000);
    });
}

// Async/await версия для запуска
async function runSumProcessor(initialNumber) {
    try {
        const result = await createSumProcessor(initialNumber);
        console.log(`Промис завершен с результатом: ${result}`);
    } catch (error) {
        console.log(`Ошибка: ${error}`);
    }
}

async function testTask4() {
    // Тест 1: Успешное выполнение
    await runSumProcessor(3);
    
    // Тест 2: Ошибка - undefined
    setTimeout(async () => {
        await runSumProcessor(undefined);
    }, 12000);
    
    // Тест 3: Ошибка - строка
    setTimeout(async () => {
        await runSumProcessor('5');
    }, 14000);
}

testTask4();