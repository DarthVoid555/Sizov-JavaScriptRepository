let x = 9;
html_out = "Ответ при x = " + x + " -> " + ((x * x - 7 * x + 10) / (x * x - 8 * x + 12));

document.getElementById('output').style.fontSize = "30px";
document.getElementById('output').innerText = html_out;