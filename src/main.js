const showLoaderButton = document.getElementById('showLoaderButton');
const loader =document.getElementById('loader');
const hide= document.getElementById('hide');
const aftershow=document.getElementById('aftershow')

showLoaderButton.addEventListener('click',function(){
    loader.style.display ='block';
    hide.style.display='none';
    aftershow.style.display='none';

    setTimeout(function(){
        loader.style.display='none';
        hide.style.display='block';
        aftershow.style.display='block';




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

  // arrow button work

  document.getElementById('swapButton').addEventListener('click', function() {
    var inputField1 = document.getElementById('inputField1');
    var inputField2 = document.getElementById('inputField2');
    
    var temp = inputField1.value;
    inputField1.value = inputField2.value;
    inputField2.value = temp;
  });
  
  // ARROW DATE CHANGE

  document.getElementById('datebutton').addEventListener('click', function() {
    var date1 = document.getElementById('date1');
    var date2 = document.getElementById('date2');
    
    var temp = date1.value;
    date1.value = date2.value;
    date2.value = temp;
  });
  

