html_out = "Медиана: ";
let arr1 = [1, 2, 5, 4, 6];
let arr2 = [8, 2, 5, 9, 5];

arr1 = arr1.concat(arr2);
arr1.sort((a,b) => a - b);

if (arr1.length % 2 == 1) {html_out += arr1[Math.floor(arr1.length / 2)];}
else {html_out += (arr1[arr1.length / 2 - 1] + arr1[arr1.length / 2]) / 2;}

document.getElementById('output').style.fontSize = "30px";
document.getElementById('output').innerText = html_out;