// Function using Parameter Part Start
function info(name, area) {
  console.log("My name is" + " " + name + ". I live in" + " " + area + ".");
}

info("Arshe", "Dhaka");
// Function using Parameter Part End

const countries = [
  "Bangladesh",
  "Argentina",
  "Brazil",
  "UK",
  "USA",
  "Australia",
];

// For Loop Part Start
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i]);
}
// For Loop Part End

// Map Part Start
countries.map((item) => {
  console.log(item);
});
// Map Part End

// forEach Part Start
countries.forEach((item) => {
  console.log(item);
});
// forEach Part End

// Check Data Type Part Start
let x = "Arshe";
console.log(typeof x);

let y = 5.5;
console.log(typeof y);
// Check Data Type Part End

// DoM Part Start

// Heading Part Start
const heading = document.querySelector("h1");
console.log(heading.innerText);
// Heading Part End

// Button Part Start
const headingBtn = document.querySelector("button");
headingBtn.addEventListener("click", function () {
  heading.style.color = "tomato";
  heading.style.fontSize = "100px";
  heading.innerHTML = "Hi Guys";
});

let darkMode = document.querySelector(".darkMode");
let lightMode = document.querySelector(".lightMode");

darkMode.addEventListener("click", () => {
  document.body.style.background = "black";
  heading.style.color = "white";
});
lightMode.addEventListener("click", () => {
  document.body.style.background = "white";
  heading.style.color = "black";
});
// Button Part End

// Form Part Start
const inputName = document.querySelector("input");
console.log(inputName);

inputName.addEventListener("keyup", () => {
  console.log(inputName.value);
});

// Form Part End

// DoM Part End
