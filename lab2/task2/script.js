function checkAge(age) {
    if (age < 18) {
        alert("Привет, малыш!");
    } else {
        alert("Здравствуйте, юноша!");
    }
}

let userAge = prompt("Сколько тебе лет?");
userAge = Number(userAge);

checkAge(userAge);