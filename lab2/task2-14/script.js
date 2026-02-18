html_out = "";
let arr = [[9, 7, -5, -3, 1],
	[10, 5, 6, 8, 4],
	[-5, 6, -7, 3, 9],
	[11, 14, -5, -7, 8],
	[12, 4, -7, -8, 5]];

max_str = 0;
min_col = 1;

for (let i = 0; i < arr.length; i++) {
	max = null;
	for (let j = 0; j < arr[i].length; j++) {
		if (arr[i][j] >= max || max === null) {max = arr[i][j];}
		}
	max_str += max;
	}

for (let j = 0; j < arr[0].length; j++) {
	min = null;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i][j] <= min || min === null) {min = arr[i][j];}
		}
	min_col *= min;
	}

html_out += "По строкам: " + max_str + "\nПо столбцам: " + min_col;

document.getElementById('output').style.fontSize = "30px";
document.getElementById('output').innerText = html_out;