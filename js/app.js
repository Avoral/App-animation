
//Find element to rotate inside .guzik class
var buttons = document.querySelectorAll('.guzik');
 for (var button of buttons) {
   if (button.dataset.button)   // If data exist
   {
     button.addEventListener("mouseover", function(){
       button.querySelector("." + button.dataset.button).classList.toggle("rotate");
     });
     button.addEventListener("mouseout", function(){
       button.querySelector("." + button.dataset.button).classList.toggle("rotate");
     });
    }
    else   // If data-button doest exist
    {
      button.addEventListener("mouseover", function(){
        button.querySelector(".av-rotate").classList.toggle("rotate");
      });
      button.addEventListener("mouseout", function(){
        button.querySelector(".av-rotate").classList.toggle("rotate");
      });
     }
 }
