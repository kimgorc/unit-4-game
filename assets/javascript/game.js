//declaring gloable variables 

var numberArray = [];
var crystalArray = [];
var crystalTotal = [];
var scoreCount= 0;
var winCount = 0;
var lossCount = 0;


//linking from html to js to display items
var randomNumberText = document.getElementById("randomNumberText");
var winCountText = document.getElementById("winCountText");
var lossCountText = document.getElementById("lossCountText");
var scoreText = document.getElementById("scoreText");

//creating a range to select a numberArray between 19-120

    for (var i=19; i<=120; i++){
        numberArray.push(i);
    }
      console.log(numberArray)

//selecting a random number from the numberArray
var randomNumber = (numberArray[Math.floor(Math.random() * numberArray.length)]); 
    randomNumber = parseInt(randomNumber);
    console.log(randomNumber);

//giving the crystals a random value between 1-12 and not repeating
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
    

// Assigning value to each button

$(document).ready(function(){
    
  $("#Crystal1").on("click", function() {
      crystalTotal.push(crystalValue1);
        console.log("CrystalTotal", crystalTotal);
        
  });

  $("#Crystal2").on("click", function() { 
      crystalTotal.push(crystalValue2);
        console.log("CrystalTotal", crystalTotal);
        
  });

  $("#Crystal3").on("click", function() {
      crystalTotal.push(crystalValue3);
        console.log("CrystalTotal", crystalTotal);

  });

  $("#Crystal4").on("click", function() { 
      crystalTotal.push(crystalValue4);
        console.log("CrystalTotal", crystalTotal);
 
  });


//merge value to make user score

var total = 0;
  for (var i = 0; i < crystalTotal.length; i++) {
      total += crystalTotal[i] << 0;
  }

console.log(total)


  // var crystalValue = ($(this).attr(crystalTotal));

  // crystalValue= Integer.parseInt(crystalTotal);
  // console.log("value", crystalValue);

    

// All of the same game win-lose logic applies. So the rest remains unchanged.
   

    // if (scoreCount === randomNumber) {
    //   winCount ++ ;
    //   alert("You win!");
    // }

    // else if (scoreCount >= randomNumber) {
    //   lossCount ++;
    //   alert("You lose!!");
    // }

  


// Display all on the html.
    
randomNumberText.textContent = randomNumber ;
winCountText.textContent = "Wins:" + winCount ;
lossCountText.textContent = "Losses: " + lossCount ;
scoreText.textContent = scoreCount;
});