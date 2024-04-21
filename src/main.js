const showLoaderButton = document.getElementById('showLoaderButton');
const loader =document.getElementById('loader');
const hide= document.getElementById('hide')

showLoaderButton.addEventListener('click',function(){
    loader.style.display ='block';
    hide.style.display='none';

    setTimeout(function(){
        loader.style.display='none';
        hide.style.display='block';


    },1000);
});

// function myFunction() {
//     const element = document.getElementById("arrow1");  // Get the DIV element
//     element.classList.remove("mystyle"); // Remove mystyle class from DIV
//     element.classList.add("newone"); // Add newone class to DIV
//   }
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
