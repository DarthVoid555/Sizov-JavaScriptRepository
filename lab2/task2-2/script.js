let html_out = "";
let countries = ["USA", "Kongo", "Japan", "China", "Urzikstan"]
let population = [1, 2, 3, 4, -2];

html_out += "Цикл for:\n";
for (let i = 0; i < countries.length; i++) {
	html_out += countries[i] + ": " + population[i] + "\n";
	}

html_out += "\nЦикл for in:\n";
for (let i in countries) {
	html_out += countries[i] + ": " + population[i] + "\n";
	}

document.getElementById('output').style.fontSize = "30px";
document.getElementById('output').innerText = html_out;