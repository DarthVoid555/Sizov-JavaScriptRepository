function calculateU(x, y, z) {
    return (Math.max(x, y) + Math.max(x + y, z)) / Math.pow(Math.max(0.5, x + z), 2);
}

console.log("Исходные числа:", 5, 3, 8)
console.log(calculateU(5, 3, 8));