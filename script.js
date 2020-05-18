var _ = require('lodash');

// console.log(_);
var array = [1,2,3,4,5,6,7,8];
console.log('answer', _.without(array, 3));

var css = document.querySelector("h3");
var color1= document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var genbutton = document.getElementById("genbutton");
var compStyles = getComputedStyle(body); //returns every CSS property and their respective values for the body element.


//changes the input color value to match initial background gradient.
initialPageLoad();
function initialPageLoad() {
  color1.value = "#ff0000";
  color2.value = "#FFFF00";
  css.textContent = compStyles.getPropertyValue("background-image"); //checked Chrome's 'Computed' tab in Dev Tools to find the correct property value. 
}


//gets the input color values to set the background gradient.
function setGradient() {
	body.style.backgroundImage = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.backgroundImage + ";"; //adds a text content to the h3 element.
}


//add event listeners for each color picker.
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


//BUTTON
function randomButton() {
  var randomColor1 = "#" + Math.floor(Math.random()*16777215).toString(16); //returns a random integer number and converts it to hexadecimal.
  var randomColor2 = "#" + Math.floor(Math.random()*16777215).toString(16);
  color1.value = randomColor1;
  color2.value = randomColor2;
  setGradient();
}

genbutton.addEventListener("click", randomButton);

