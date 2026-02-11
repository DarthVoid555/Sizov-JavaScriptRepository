html_out = "";

function processEmail() {
	let email = document.getElementById("email").value;
	html_out = "";
	if (email.includes("@")) {
		html_out += "Корректный адрес";
		console.log(html_out);
		}
	else {
		html_out += "Некорректный адрес";
		console.warn(html_out);
		}

	document.getElementById('output').innerText = html_out;
	document.getElementById('output').style.fontSize = "30px";
	}