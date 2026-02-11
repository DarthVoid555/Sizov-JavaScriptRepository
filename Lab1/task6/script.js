let str = "20";
let a = 5;
html_out = "str + a -> " + (str + a) + " | Конкатинация: строка + число\n" +
	"str - a -> " + (str - a) + " | Из-за \"-\" строка сводится к число, далее вычитание\n" +
	"str * \"2\" -> " + (str * "2") + " | Из-за \"*\" строка сводится к числу, далее умножение\n" +
	"str / 2 -> " + (str / 2) + " | Из-за \"/\" строка сводится к числу, далее деление\n";

console.log(html_out);
document.getElementById('output').style.fontSize = "30px";
document.getElementById('output').innerText = html_out;