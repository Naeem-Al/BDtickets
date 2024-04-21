const showLoaderButton = document.getElementById('showLoaderButton');
const loader =document.getElementById('loader');

showLoaderButton.addEventListener('click',function(){
    loader.style.display ='block';

    setTimeout(function(){
        loader.style.display='none';
    },3000);
});