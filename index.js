// document;
// #document
// document.body;
// <body>​…​</body>​<h1>​Hello World​</h1>​<h2>​Another Heading​</h2>​<p>​…​</p>​<ul>​…​</ul>​<div class=​"container">​…​</div>​<script src=​"index.js">​</script>​</body>​
// document.querySelector("h1");
// <h1>​Hello World​</h1>​
// document.querySelector("h2");
// <h2>​Another Heading​</h2>​
// document.querySelector("p");
// <p>​…​</p>​
// let heading = document.querySelector("h1");
// undefined
// heading;
// <h1>​Hello World​</h1>​
// heading.innerHTML;
// "Hello World"
// heading.innerHTML = "Something else";
// "Something else"

// /////////////////////////////////////////////////////
// // Create a variable called subheading by searching
// //  through the DOM and find h2
// // Create a variable called paragraph by searching

// // querySelector = give individual, at first item
// let heading = document.querySelector("h1");

// let headingStyles = getComputedStyle(heading);
// let currentFontSizes = headingStyles.fontSize;
// console.log (currentFontSizes);

// heading.style.fontSize = "100px";
// heading.style.color = "red";
// heading.style.textDecoration = "underline";
// heading.style.fontStyle = "italic";
// heading.style.textTransform = "UpperCase";

// console.log(heading.style);

// let subheading = document.querySelector("h2");
// let paragraph = document.querySelector("p");
// let listItem = document.querySelector("li");
// let anchor = document.querySelector(".container a");

// console.log (heading, subheading, paragraph, listItem);
// console.log (anchor);

// let currentHref = anchor.getAttribute("href");
// console.log(currentHref);

// let currentID = anchor.getAttribute("id");
// console.log (currentID);

// anchor.setAttribute ("href", "https://google.com");
// anchor.setAttribute("id", "google");
// anchor.innerText = "Google";

// // querySelector All = give all what using li
// let allListItem = document.querySelectorAll("li");
// console.log (allListItem);

// let allParagraph = document.querySelectorAll("p");
// console.log (allParagraph);

// //  Accessing Information about DOM Nodes
// console.log(heading.innerHTML);
// heading.innerHTML = "THIS WAS CHANGED THROUGH JS";
// let subheading2 = document.querySelector("h2");

// console.log (subheading2.innerText);

// heading.style.fontSize = "20px";

// function increaseFontSize() {
//   let currentFontSize = parseInt(heading.style.fontSize);
//   heading.style.fontSize = currentFontSize + 1 + "px";
// }

// //setInterval(increaseFontSize, 100);

// let image = document.querySelector("img");
// image.style.width = "200px";
// image.style.border = "10px solid blue";

// let currentSrc = image.getAttribute("src");

// // let input = document.querySelector("input");
// // let currentValue = input.value;
// // console.log (currentValue);

// let myParagraph = document.createElement("p");
// myParagraph.innerText = "CREATED WITH JS";

// // document.body.appendChild(myParagraph); // add myParagraph add the end of body text
// document.body.insertBefore(myParagraph, heading);

// //create an h3
// // set the text to be also created by js

// let myHeadingh3 = document.createElement("h3");
// myHeadingh3.innerText = "Also Created with JS";
// myHeadingh3.style.fontSize ="30px";
// myHeadingh3.style.color = "green";

// document.body.insertBefore(myHeadingh3, subheading);

// function onClick(){
//     console.log ("The page was clicked");
// }

// onClick();

// let heading = document.querySelector("h1");
// console.log (heading);
// heading.addEventListener("click", onClick);

// let subHeading = document.querySelector("h2");

// function subHeadingClicked(){
//     console.log("The h2 was clicked");
// }

// subHeading.addEventListener("click", subHeadingClicked);

// // select the input DOM node using querySelector
// let input = document.querySelector("input");

// // create a function that logs "" the user type something"
// function onKeyPress(){
//     let currentVal = input.value;
//     console.log (currentVal);
//     // console.log("The User type something");
// }

// // when the keypress takes place on the input DOM node, run the function
// input.addEventListener("keypress", onKeyPress);

// let img = document.querySelector("img");
// function onMouseMove(){
//     console.log ("the mouse is moving");
// }
// img.addEventListener("mouseMove", onMouseMove);

// // when the first line item is clicked
// // Call a function that logs out "The List item was clicked"

// let firstLineItem = document.querySelector ("li");

// function itemClicked (){
//     console.log ("The list item was clicked");
// }

// firstLineItem.addEventListener("click", itemClicked);

// function delayedFunction(){
//     console.log ("this function should be delayed");
// }

// setTimeout(delayedFunction, 2000); // call delayed in 2s seconds time = 2000ms

// function regularlyCalledFunction(){
//     console.log ("this should be called every three second");
// };

let img = document.querySelector("img");
img.style.width = "150px";

function increaseWidth() {
  let style;
  console.log("increase width");
}
increaseWidth();

let img2 = document.querySelector("img");

function onMouseMove(event) {
  const x = event.clientX;
  const y = event.clientY;
  img2.style.left = x + "px";
  img2.style.top = y + "px";
}

document.body.addEventListener("mousemove", onMouseMove);
