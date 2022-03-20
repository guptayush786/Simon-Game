var buttonColors = ["red" , "green", "blue" , "yellow"];  
  
var gamePattern = [];
 
var userClickedPattern = [];

var level = 0;

 var start = false;

 $(document).keypress(function(){
    if(!start){

      $("#level-title").text("Level" + level);
      nextSequence();
      start = true;
    }
     
 });

$(".btn").click(function() {
    var userChoosenColor = $(this).attr("id");

    userClickedPattern.push(userChoosenColor);

    playSound(userChoosenColor);
    animatePress(userChoosenColor);

    checkAnswer(userClickedPattern.length-1);
 });

 function checkAnswer(currentLevel){

    
   if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
 }
 
 
 function nextSequence(){

   userClickedPattern = [];
   level++ ;
   $("#level-title").text("Level " + level);

     var randomNumber = Math.floor(Math.random()*4);
     var randomChoosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChoosenColor);

    $("#" + randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
      playSound(randomChoosenColor);
      
    
 }

 function animatePress(currentColor){

   $("#" + currentColor).addClass("pressed");
   
    setTimeout(function(){
       $("#" + currentColor).removeClass("pressed");
    } , 100);
  
}

 function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
 }
 
 function startOver(){
    level = 0;
    gamePattern = [];
    start = false;
 }

  


  




