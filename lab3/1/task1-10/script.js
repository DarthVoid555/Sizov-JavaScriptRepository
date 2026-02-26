function Calculator() {
    this.a = 0;
    this.b = 0;
    
    this.read = function(a, b) {
        this.a = a;
        this.b = b;
    };
    
    this.sum = function() {
        return this.a + this.b;
    };
    
    this.mul = function() {
        return this.a * this.b;
    };
}

let calc = new Calculator();

calc.read(5, 3);
console.log("a =", calc.a, "b =", calc.b);
console.log("sum =", calc.sum());
console.log("mul =", calc.mul());

calc.read(10, 7);
console.log("sum =", calc.sum());
console.log("mul =", calc.mul());