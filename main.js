console.log("main js works")

fetch("http://localhost:3000/currencies").then(response => response.json()).then(json => console.log(json))