let html_out = "";
let arr = [1, 2, 3, 4, 5];

html_out += "arr[2] = " + arr[2] + "\nlength = " + arr.length;
arr.splice(1, 1);
html_out += "\nИзменённый массив:";
for (let i = 0; i < arr.length; i++) {
	html_out += "\n" + arr[i];
	}

document.getElementById('output').style.fontSize = "30px";
document.getElementById('output').innerText = html_out;