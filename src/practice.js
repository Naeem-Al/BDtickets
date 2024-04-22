// Assuming you have a preloader element with the ID "preloader" and a button with the ID "changeColorButton"

// Get a reference to the preloader element
var preloader = document.getElementById('preloader');

// Get a reference to the button element
var button = document.getElementById('changeColorButton');

// Add a click event listener to the button
button.addEventListener('click', function() {
  // Change the background color of the preloader
  preloader.style.backgroundColor = 'your-desired-color'; // Replace 'your-desired-color' with the color you want
});
