//declaring gloable variables 

var numberArray = [];
var crystalArray = [];
var scoreCount= 0;
var winCount = 0;
var lossCount = 0;


//linking from html to js to display items
var randomNumberText = document.getElementById("randomNumberText");
var winCountText = document.getElementById("winCountText");
var lossCountText = document.getElementById("lossCountText");
var scoreText = document.getElementById("scoreText");
var resetText = document.getElementById("reset");

//creating a range to select a numberArray between 19-120

    for (var i=19; i<=120; i++){
        numberArray.push(i);
    }
      console.log(numberArray)

//selecting a random number from the numberArray
var randomNumber = (numberArray[Math.floor(Math.random() * numberArray.length)]); 
    randomNumber = parseInt(randomNumber);
    console.log(randomNumber);

randomNumberText.textContent = randomNumber ;
//giving the crystals a random value between 1-12 
    for (var i=1; i<=12; i++){
        crystalArray.push(i);
    }
 
      console.log(crystalArray)

var crystalValue1 = Math.floor(Math.random() * crystalArray.length); 
  crystalValue1= parseInt(crystalValue1)
  console.log("crystal", crystalValue1);
var crystalValue2 = Math.floor(Math.random() * crystalArray.length); 
  crystalValue2= parseInt(crystalValue2)
  console.log("crystal2", crystalValue2);
var crystalValue3 = Math.floor(Math.random() * crystalArray.length); 
  crystalValue3= parseInt(crystalValue3)
  console.log("crystal3", crystalValue3);
var crystalValue4 = Math.floor(Math.random() * crystalArray.length);
  crystalValue4= parseInt(crystalValue4) 
  console.log("crystal4", crystalValue4);
    

// game logic

$(document).ready(function(){

//onclic event   
  $("#Crystal1").on("click", function() {
//
        scoreCount +=(crystalValue1);
          console.log("score", scoreCount)
          scoreText.textContent = scoreCount;

          if (scoreCount === randomNumber) {
            winCount ++ ;
            alert("You win!");
            newgame(); 
          }
      
          else if (scoreCount >= randomNumber) {
            lossCount ++;
            alert("You lose!!");
            newgame();
          }
          winCountText.textContent = "Wins:" + winCount ;
          lossCountText.textContent = "Losses: " + lossCount ;
  });

  $("#Crystal2").on("click", function() { 

        scoreCount +=(crystalValue2);
          console.log("score", scoreCount)
          scoreText.textContent = scoreCount;

          if (scoreCount === randomNumber) {
            winCount ++ ;
            alert("You win!");
            newgame() ;
          }
      
          else if (scoreCount >= randomNumber) {
            lossCount ++;
            alert("You lose!!");
            newgame() ;
          }
          winCountText.textContent = "Wins:" + winCount ;
          lossCountText.textContent = "Losses: " + lossCount ;
  });

  $("#Crystal3").on("click", function() {

        scoreCount +=(crystalValue3);
          console.log("score", scoreCount)
          scoreText.textContent = scoreCount;

          if (scoreCount === randomNumber) {
            winCount ++ ;
            alert("You win!");
            newgame() ;
          }
      
          else if (scoreCount >= randomNumber) {
            lossCount ++;
            alert("You lose!!");
            newgame(); 
          }
          winCountText.textContent = "Wins:" + winCount ;
          lossCountText.textContent = "Losses: " + lossCount ;
  });

  $("#Crystal4").on("click", function() {

        scoreCount +=(crystalValue4);
          console.log("score", scoreCount)
          scoreText.textContent = scoreCount;

          if (scoreCount === randomNumber) {
            winCount ++ ;
            alert("You win!");
            newgame();

          }
      
          else if (scoreCount >= randomNumber) {
            lossCount ++;
            alert("You lose!!");
            newgame();
          }
          winCountText.textContent = "Wins:" + winCount ;
          lossCountText.textContent = "Losses: " + lossCount ;
  });
  
 function newgame() {

    scoreCount = 0; 
    scoreText.textContent = scoreCount;
    
      randomNumber = (numberArray[Math.floor(Math.random() * numberArray.length)]); 
        randomNumber = parseInt(randomNumber);
        console.log(randomNumber);

        randomNumberText.textContent = randomNumber ;


        crystalValue1 = Math.floor(Math.random() * crystalArray.length); 
            crystalValue1= parseInt(crystalValue1)
            console.log("crystal", crystalValue1);
        crystalValue2 = Math.floor(Math.random() * crystalArray.length); 
            crystalValue2= parseInt(crystalValue2)
            console.log("crystal2", crystalValue2);
          crystalValue3 = Math.floor(Math.random() * crystalArray.length); 
            crystalValue3= parseInt(crystalValue3)
            console.log("crystal3", crystalValue3);
        crystalValue4 = Math.floor(Math.random() * crystalArray.length);
            crystalValue4= parseInt(crystalValue4) 
            console.log("crystal4", crystalValue4);
      

      winCountText.textContent = "Wins:" + winCount ;
      lossCountText.textContent = "Losses: " + lossCount ;
}
})