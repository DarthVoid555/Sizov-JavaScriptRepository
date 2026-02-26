class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Rabbit extends Animal {
    constructor(name) {
        super(name);
        this.created = Date.now();
    }
}

let rabbit = new Rabbit("Белый кролик");
console.log(rabbit.name);
console.log(rabbit.created); //В JavaScript при наследовании конструктор дочернего класса 
                            // должен вызвать super() до того, как использовать this