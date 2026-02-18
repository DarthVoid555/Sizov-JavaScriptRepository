function perimeter(...coords) {

    if (coords.length % 2 !== 0 || coords.length < 6) {
        return "Ошибка: нужно четное количество координат, минимум 6";
    }
    
    let n = coords.length / 2;
    let perim = 0;

    for (let i = 0; i < n; i++) {
        let x1 = coords[i * 2];
        let y1 = coords[i * 2 + 1];
        
        let nextIndex = (i + 1) % n;
        let x2 = coords[nextIndex * 2];
        let y2 = coords[nextIndex * 2 + 1];
        
        let side = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        perim += side;
    }
    
    return perim;
}

//ТЕСТ
console.log("===ТЕСТИРОВАНИЕ===\n");

let triangle = perimeter(0, 0, 3, 0, 0, 4);
console.log("Треугольник (0,0), (3,0), (0,4)");
console.log("Периметр =", triangle); // 3+4+5 = 12
console.log("---");

let square = perimeter(0, 0, 2, 0, 2, 2, 0, 2);
console.log("Квадрат (0,0), (2,0), (2,2), (0,2)");
console.log("Периметр =", square); // 2+2+2+2 = 8
console.log("---");

let rectangle = perimeter(1, 1, 5, 1, 5, 4, 1, 4);
console.log("Прямоугольник (1,1), (5,1), (5,4), (1,4)");
console.log("Периметр =", rectangle); // 4+3+4+3 = 14
console.log("---");

let pentagon = perimeter(0, 0, 2, 0, 3, 2, 1, 3, -1, 2);
console.log("Пятиугольник:");
console.log("Периметр =", pentagon);