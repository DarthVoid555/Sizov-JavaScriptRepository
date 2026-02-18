let arr = ['c', 5, 2, 'b', 3, 1, 4, 'a'];

arr.sort((a, b) => {
    if (typeof a === 'number' && typeof b === 'number') return a - b;
    if (typeof a === 'number') return -1;
    if (typeof b === 'number') return 1;
    return a.localeCompare(b);
});

html_out = arr;

document.getElementById('output').style.fontSize = "30px";
document.getElementById('output').innerText = html_out;