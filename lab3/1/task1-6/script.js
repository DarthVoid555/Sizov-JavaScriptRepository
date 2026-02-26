let calculator = {
    a: 0,
    b: 0,
    
    read: function(a, b) {
        this.a = a;
        this.b = b;
    },
    
    sum: function() {
        return this.a + this.b;
    },
    
    mul: function() {
        return this.a * this.b;
    }
};

calculator.read(5, 3);
console.log("a =", calculator.a, "b =", calculator.b);
console.log("sum =", calculator.sum());
console.log("mul =", calculator.mul());

calculator.read(10, 20);
console.log("sum =", calculator.sum());
console.log("mul =", calculator.mul());