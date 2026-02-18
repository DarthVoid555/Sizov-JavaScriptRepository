html_out = "";
let arr = new Map();

arr.set("Пушкин", ["Дубровский", "Капитанская дочка"]);
arr.set("Есенин", ["Письмо матери"]);
arr.set("Толстой", ["Толстый и тонкий"]);

for (let [key, value] of arr) {html_out += `${key}: ${value}` + "\n";}

document.getElementById('output').style.fontSize = "30px";
document.getElementById('output').innerText = html_out;