let a = "12";
let b = "7.15";
html_out = a + " % " + b + " == " + Math.round(parseFloat(a) % parseFloat(b));

console.log(html_out);
document.getElementById('output').style.fontSize = "30px";
document.getElementById('output').innerText = html_out;