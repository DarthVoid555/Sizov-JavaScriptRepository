class Stock {
    constructor() {
        this.boxes = [];
        this.nextId = 0;
        this.removedIds = new Set();
    }
    
    add(w, v) {
        let box = {
            id: this.nextId++,
            w: w,
            v: v,
            timestamp: Date.now()
        };
        this.boxes.push(box);
        return box.id;
    }
    
    getByW(min_w) {
        let candidates = this.boxes.filter(box => box.w >= min_w);
        
        if (candidates.length === 0) {
            return -1;
        }
        
        candidates.sort((a, b) => {
            if (a.w !== b.w) {
                return a.w - b.w;
            }
            return a.timestamp - b.timestamp;
        });
        
        let selected = candidates[0];
        this.boxes = this.boxes.filter(box => box.id !== selected.id);
        this.removedIds.add(selected.id);
        
        return selected.id;
    }
    
    getByV(min_v) {
        let candidates = this.boxes.filter(box => box.v >= min_v);
        
        if (candidates.length === 0) {
            return -1;
        }
        
        candidates.sort((a, b) => {
            if (a.v !== b.v) {
                return a.v - b.v;
            }
            return a.timestamp - b.timestamp;
        });
        
        let selected = candidates[0];
        this.boxes = this.boxes.filter(box => box.id !== selected.id);
        this.removedIds.add(selected.id);
        
        return selected.id;
    }
    
    showStock() {
        console.log("Текущий склад:");
        this.boxes.forEach(box => {
            console.log(`  ID:${box.id} (w:${box.w}, v:${box.v})`);
        });
    }
}

console.log("ТЕСТ 1: Добавление коробок");
let stock = new Stock();

stock.add(10, 100);
stock.add(20, 50);
stock.add(15, 80);
stock.add(10, 120);

stock.showStock();

console.log("\nТЕСТ 2: Поиск по грузоподъемности");
console.log("Ищем коробку для веса 10:");
let id = stock.getByW(10);
console.log("Выдана коробка ID:", id);

stock.showStock();

console.log("\nИщем коробку для веса 15:");
id = stock.getByW(15);
console.log("Выдана коробка ID:", id);

stock.showStock();

console.log("\nТЕСТ 3: Поиск по объему");
console.log("Ищем коробку для объема 100:");
id = stock.getByV(100);
console.log("Выдана коробка ID:", id);

stock.showStock();

console.log("\nТЕСТ 4: Нет подходящих коробок");
console.log("Ищем коробку для веса 100:");
id = stock.getByW(100);
console.log("Результат:", id);

console.log("Ищем коробку для объема 200:");
id = stock.getByV(200);
console.log("Результат:", id);

console.log("\ТЕСТ 5: Добавляем новые и ищем");
stock.add(30, 30);
stock.add(5, 200);

stock.showStock();

console.log("Ищем коробку для объема 150:");
id = stock.getByV(150);
console.log("Выдана коробка ID:", id);

stock.showStock();