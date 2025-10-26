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
  heading.style.color = "#FF4655";
  heading.style.fontSize = "50px";
  heading.innerHTML = "Welcome";
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

// Add Review Part Start
let reviewContainer = document.getElementById("reviewContainer");
let reviewInput = document.getElementById("reviewInput");
let reviewBtn = document.getElementById("reviewBtn");

reviewBtn.addEventListener("click", () => {
  let inputValue = reviewInput.value;
  let paragraph = document.createElement("p");
  paragraph.innerText = inputValue;

  // appendChild is used to pass vlue of input in new element
  reviewContainer.appendChild(paragraph);
  reviewInput.value = " ";
});
// Add Review Part End

// Delete Part Start
let deleteContent = document.getElementById("deleteContent");
let deleteInput = document.getElementById("deleteInput");
let deleteBtn = document.getElementById("deleteBtn");

deleteInput.addEventListener("keyup", () => {
  if (deleteInput.value == "Delete") {
    deleteBtn.removeAttribute("disabled");
  } else {
    deleteBtn.setAttribute("disabled", true);
  }
});

deleteBtn.addEventListener("click", () => {
  deleteContent.style.display = "none";
  deleteInput.value = "";
});
// Delete Part End

// DoM Part End
