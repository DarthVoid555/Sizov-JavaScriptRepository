let arr = [9, 7, -5, -3, 1];

for (let i = 0; i < arr.length; i++) {
	if (arr[i] > 0 && i % 2 === 1) {arr[i] *= 3;}
	if (arr[i] < 0 && i % 2 === 0) {arr[i] /= 5;}
	}

html_out = arr;

document.getElementById('output').style.fontSize = "30px";
document.getElementById('output').innerText = html_out;