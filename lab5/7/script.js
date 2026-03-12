function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function processCandidate(candidate) {
    const [name, prep1, defense1, prep2, defense2] = candidate;
    
    console.log(`${name} started the 1 task.`);
    await delay(prep1);
    
    console.log(`${name} moved on to the defense of the 1 task.`);
    await delay(defense1);
    
    console.log(`${name} completed the 1 task.`);
    console.log(`${name} is resting.`);
    await delay(5);
    
    console.log(`${name} started the 2 task.`);
    await delay(prep2);
    
    console.log(`${name} moved on to the defense of the 2 task.`);
    await delay(defense2);
    
    console.log(`${name} completed the 2 task.\n`);
}

async function interviews(candidates) {
    const startTime = Date.now();
    
    await Promise.all(candidates.map(candidate => processCandidate(candidate)));
    
    const endTime = Date.now();
    const totalSeconds = ((endTime - startTime) / 1000).toFixed(1);
    
    console.log(`\nВСЕ СОБЕСЕДОВАНИЯ ЗАВЕРШЕНЫ за ${totalSeconds} секунд`);
}

const candidates = [
    ['Ivan', 500, 200, 700, 200],
    ['John', 300, 400, 500, 100],
    ['Sophia', 400, 200, 500, 100]
];

interviews(candidates);