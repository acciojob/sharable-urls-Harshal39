// your code here
let button = document.getElementById('button');
button.addEventListener(click,() => {
	const baseUrl = "https://localhost:8080/";
    const name = document.getElementById('name').value;
    const year = document.getElementById('year').value;
    let queryString = baseUrl;

    if (name) {
        queryString += `?name=${encodeURIComponent(name)}`;
    }
    if (year) {
        if (name) {
            queryString += `&year=${encodeURIComponent(year)}`;
        } else {
            queryString += `?year=${encodeURIComponent(year)}`;
        }
    }

    document.getElementById('url').innerText = queryString;
});
