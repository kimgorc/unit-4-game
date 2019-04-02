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
    console.log(randomNumber);

//giving the crystals a random value between 1-12 and not repeating
    for (var i=1; i<=12; i++){
        crystalArray.push(i);
    }
      console.log(crystalArray)

var crystalValue1 = Math.floor(Math.random() * crystalArray.length); 
  console.log("crystal1", crystalValue1);
var crystalValue2 = Math.floor(Math.random() * crystalArray.length); 
  console.log("crystal2", crystalValue2);
var crystalValue3 = Math.floor(Math.random() * crystalArray.length); 
  console.log("crystal3", crystalValue3);
var crystalValue4 = Math.floor(Math.random() * crystalArray.length); 
  console.log("crystal4", crystalValue4);
    

// Assigning value to each button

$(document).ready(function(){
 
  $("#Crystal1").on("click", function() {
    $("#Crystal1").val(crystalValue1);
        crystalTotal.push(crystalValue1);
        console.log("CrystalTotal", crystalTotal);
        
  });

  $("#Crystal2").on("click", function() { 
    $("#Crystal2").val(crystalValue2);
      crystalTotal.push(crystalValue2);
      console.log("CrystalTotal", crystalTotal);
  });

  $("#Crystal3").on("click", function() { 
    $(this).val(crystalValue3);
    crystalTotal.push(crystalValue3);
        console.log("CrystalTotal", crystalTotal);
  });

  $("#Crystal4").on("click", function() { 
    $(this).val(crystalValue4);
    crystalTotal.push(crystalValue4);
       console.log("CrystalTotal", crystalTotal);
  });


//merge value to make user score
function sum(crystalTotal){
  var total = 0;
  for( idx=0; idx <= crystalTotal.length-1;idx++){
    total+= crystalTotal[idx];
  }
  return total;
}

console.log(crystalTotal)

    // var sum = crystalTotal.reduce(function(a, b) {
    //   return a+ b;}, 0);
    // });
// var crystalValueTotal = ($(this).attr("totalValue"));
//   crystalValue = parseInt(crystalValueTotal);

      
//       scoreCount += crystalValueTotal;

    // console.log("crystalValueTotal", crystalValueTotal)
    console.log("score", scoreCount)
    

// All of the same game win-lose logic applies. So the rest remains unchanged.
   

    if (scoreCount === randomNumber) {
      winCount ++ ;
      alert("You win!");
    }

    else if (scoreCount >= randomNumber) {
      lossCount ++;
      alert("You lose!!");
    }

  


// Display all on the html.
    
randomNumberText.textContent = randomNumber ;
winCountText.textContent = "Wins:" + winCount ;
lossCountText.textContent = "Losses: " + lossCount ;
scoreText.textContent = scoreCount;

  })