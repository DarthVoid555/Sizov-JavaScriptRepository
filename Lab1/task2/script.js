let num_1 = 12;
let num_2 = "12";
html_out = "";

html_out += "var1 = " + num_1 + " | var2 = \"" + num_2 + "\"\n" +
	"var1 = var2: " + (num_1 == num_2) + "\n" +
	"var1 < var2: " + (num_1 < num_2) + "\n" +
	"var1 <= var2: " + (num_1 <= num_2) + "\n" +
	"var1 > var2: " + (num_1 > num_2) + "\n";

document.getElementById('output').style.fontSize = "30px";
document.getElementById('output').innerText = html_out;