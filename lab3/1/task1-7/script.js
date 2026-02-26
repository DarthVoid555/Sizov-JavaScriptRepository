let ladder = {
    step: 0,
    
    up() {
        this.step++;
        console.log(`up() -> step = ${this.step}`); // для отладки
        return this;
    },
    
    down() {
        this.step--;
        console.log(`down() -> step = ${this.step}`); // для отладки
        return this;
    },
    
    showStep() {
        console.log(`showStep() -> ${this.step}`);
        return this;
    }
};
 
console.log("цепочка вызовов:");
ladder.up().up().down().showStep().down().showStep();