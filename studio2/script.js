// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");


console.log('reading');

//capture the submit event
  document.f.onsubmit = processForm;

  //define process function
  function processForm() {
    console.log('processing form');

    //store user name in a variable
    var name = document.f.name.value;   var food = document.f.food.value;
    var time = document.f.time.value;   var smell = document.f.smell.value;
 var creature = document.f.creature.value;  
      
    var result=document.getElementById('result');
      
       if (name == "" || time == "" || creature == "" || smell == "" || food == "") {
            alert("Fill Out the Form, baby");
        } else {
    //store userColor in a variable called userColor
result.innerHTML=('As usual, you were waked up by the clock at ' + time +'.But unusual that '+ name+ ' is right next to you on your bed, eating ' + food +'.'+ name +"'s mouth smells like " + smell + ' and holy!'+ name+ ' tries to kiss you. You run away immediately but you cannot find the door out. Suddenly many '+ creature + ' are climbing down from the ceiling. And the room becomes smaller and smaller.<br><br><br><br> This must be a nightmare!<br><br><br><br>This must be a nightmare!<br><br><br><br><br><br> Yes. This is a nightmare. It is three hours after '+time+ ' now. You have already miss all day class.' );
    //comment out the alert message above
        }
    //call a new alert() to concatenate a message with userName and userColor

     //prevent page from reloading
    return false;
    
  }
    });

//+'You find out that you had married '+ name+ ' and this person is right next to you on your bed, eating ' + food +'.'+ name +"'s mouth smells like" smell+ ' and holy!'+ name+ 'tries to kiss you. You run away immediately but you cannot find the door out. The room becomes smaller and smaller. Suddenly many'+ creature + ' are climbing down from the ceiling.'