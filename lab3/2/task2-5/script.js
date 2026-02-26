function Rabbit() {}

Rabbit.prototype = { eats: true };
let rabbit1 = new Rabbit();
Rabbit.prototype = {};
console.log("Случай 1:", rabbit1.eats);

Rabbit.prototype = { eats: true };
let rabbit2 = new Rabbit();
Rabbit.prototype.eats = false;
console.log("Случай 2:", rabbit2.eats);

Rabbit.prototype = { eats: true };
let rabbit3 = new Rabbit();
delete rabbit3.eats;
console.log("Случай 3:", rabbit3.eats);

Rabbit.prototype = { eats: true };
let rabbit4 = new Rabbit();
delete Rabbit.prototype.eats;
console.log("Случай 4:", rabbit4.eats);