let number = 42;
let text = "Text";
let truth = true;
let list = [1, 2, 3];
let vocabulary = {name: "Max"};
let null_var = null;
let undefined_var = undefined;
html_out = "";

html_out += "Переменная\t|\t" + "Значение\t|\t" + "Тип\n" +
	"number\t|\t" + number + "\t|\t" + typeof(number) + "\n" +
	"text\t|\t" + text + "\t|\t" + typeof(text) + "\n" +
	"truth\t|\t" + truth + "\t|\t" + typeof(truth) + "\n" +
	"list\t|\t" + list + "\t|\t" + typeof(list) + "\n" +
	"vocabulary\t|\t" + vocabulary + "\t|\t" + typeof(vocabulary) + "\n" +
	"null_var\t|\t" + null_var + "\t|\t" + typeof(null_var) + "\n" +
	"undefined_var\t|\t" + undefined_var + "\t|\t" + typeof(undefined_var) + "\n";

document.getElementById('output').style.fontSize = "30px";
document.getElementById('output').innerText = html_out;