let user = {};
console.log("a. Пустой объект:", user);

user.name = "John";
console.log("b. После добавления name:", user);

user.surname = "Smith";
console.log("c. После добавления surname:", user);

user.name = "Pete";
console.log("d. После изменения name:", user);

delete user.name;
console.log("e. После удаления name:", user);

// Финальный результат
console.log("Финальный объект:", user); // { surname: "Smith" }