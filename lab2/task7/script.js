function sequence(n) {
    if (n === 1) {
        return 1;
    }
    
    let sum = 0;
    for (let i = 1; i < n; i++) {
        sum += sequence(i);
    }
    
    return Math.sin(sum);
}

console.log("a1 =", sequence(1));
console.log("a2 =", sequence(2));
console.log("a3 =", sequence(3));
console.log("a4 =", sequence(4));
console.log("a5 =", sequence(5));
console.log("a6 =", sequence(6));