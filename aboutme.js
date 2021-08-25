let body = document.querySelector("body");
console.log(body);

body.style.fontFamily = "Arial, sans-serif";

document.getElementById("nickname").textContent = "AqiL";
document.getElementById("favorites").textContent = "Korean drama";
document.getElementById("hometown").textContent = "Johor, Malaysia";

// The .className property sets or returns the class name of an element
let list = document.getElementsByTagName("li");
for (let x = 0; x < list.length; x += 1) {
  list[x].className = "list-item";
}

let listItem = document.querySelector("ul");
console.log(listItem);
listItem.style.color = "Red";

let newPic = document.createElement("img");
newPic.src = "https://i.imgur.com/u2MKUvj.jpg";
document.body.appendChild(newPic);
