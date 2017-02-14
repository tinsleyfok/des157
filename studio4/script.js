// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

var elements = document.getElementsByTagName('li');
var tipTimer, tipId;

for (var i = 0; i < elements.length; i++) {
elements[i].addEventListener ('mouseover', function(event){
  // what if I wanted to send a parameter ('eat') with the call to showMsg?
  tipId = document.getElementById(this.id + "Tip");
  tipTimer = setTimeout(showMsg, 500);
});

elements[i].addEventListener ('mouseout', function(){
  clearTimeout(tipTimer);
  tipId.style.opacity = 0;
});
}

function showMsg(){
  //can I use "this" to find out which object called the function?
  tipId.style.opacity = 1;
}

});
