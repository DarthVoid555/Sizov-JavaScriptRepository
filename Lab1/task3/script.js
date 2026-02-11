let a = false;
let b = null;
let c = undefined;
html_out = "a = " + a + "\n" +
	"b = " + b + "\n" +
	"c = " + c + "\n";

console.log(html_out);
document.getElementById('output').style.fontSize = "30px";
document.getElementById('output').innerText = html_out;