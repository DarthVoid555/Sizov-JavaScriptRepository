let arr = [9, 7, 5, 3, 1];

let violation_index = arr.find_index((item, index) => index < arr.length - 1 && item < arr[index + 1]);

if (violationIndex === -1) {
	html_out += arr.reverse();
	} 
else {
	html_out += (violationIndex + 1);
	}

document.getElementById('output').style.fontSize = "30px";
document.getElementById('output').innerText = html_out;