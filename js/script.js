// *************************** YOUR CODE BELOW *******************************
$("#shoot").click(function(){
    let pchoice= $("#input").val();
    $("#userChoice").html(pchoice);

    function computerchoice(number){
        let number = Math.random();
        if(number > 0.6){
            computerResult = "rock";
        }
        if(number < 0.6 && number > 0.3){
            computerResult = "paper";
        }
        else{
            computerResult = "scissors";
        }
    }

    let x = computerchoice()
    $("#computerChoice").html(x);
    if (pchoice == "rock" && x == "scissors"){
        $("#result").html("Player win!");
    }

});
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

