html_out = "";
let arr = [[9, 7, -5, -3, 1],
	[10, 5, 6, 8, 4],
	[-5, 6, -7, 3, 9],
	[11, 14, -5, -7, 8],
	[12, 4, -7, -8, 5]];

for (let i = 0; i < 5; i++) {
	for (let j = 0; j < 5; j++) {
		if (arr[i][j] >= -5 && arr[i][j] <= 7) {html_out += arr[i][j] + " ";}
		}
	}

document.getElementById('output').style.fontSize = "30px";
document.getElementById('output').innerText = html_out;