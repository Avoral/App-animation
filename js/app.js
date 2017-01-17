/*Avoral - rotate element inside button
*/


//Find element to rotate inside .guzik class
var buttons = document.querySelectorAll('.guzik');
 for (var button of buttons) {
   if (button.dataset.button )   // If data exist
   {
     button.addEventListener("click", function(e){
       if (!e.target.querySelector("." + e.target.dataset.button)) {
         e.target.classList.toggle("rotate");
       }
       else {
        e.target.querySelector("." + e.target.dataset.button).classList.toggle("rotate");
      }
 });
     }
    else   // If data-button not exist rotate .av-rotate
    {
      if (button.dataset.button )   // If data exist
      {
        button.addEventListener("click", function(e){
          if (!e.target.querySelector(".av-rotate")) {
            e.target.classList.toggle("rotate");
          }
          else {
           e.target.querySelector(".av-rotate").classList.toggle("rotate");
         }
        });


     }
 }
