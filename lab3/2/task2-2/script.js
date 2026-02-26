let animal = {
    eat() {
        console.log("this внутри eat:", this);
        this.full = true;
    }
};

let rabbit = {
    __proto__: animal,
    name: "rabbit"
};

rabbit.eat();
console.log("rabbit после eat:", rabbit);
console.log("animal после eat:", animal);