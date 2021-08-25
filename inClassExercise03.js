let title = document.querySelector("title");
console.log(title);

let heading1 = document.querySelector("h1");
console.log(heading1);

// convert in browser page using JS
heading1.innerHTML = "This Make by Javascript";

heading1.style.color = "blue";
heading1.style.fontSize = "50px";
heading1.style.fontStyle = "italic";
console.log(heading1.style);
