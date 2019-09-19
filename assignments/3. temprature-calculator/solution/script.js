var result = document.getElementById("result");
var input = document.getElementById("text-box");
var button = document.getElementById("check-button");

button.addEventListener("click", function(){
    var inputData = parseInt(input.value); //Get data from input
    
    if (!isNaN(inputData)) { //Check if it's a number
        var fahrenheit = (inputData*9 / 5) + 32; // calculation
        result.innerHTML = "That is " + fahrenheit + " in °F"; //Print to screen
    }
    
});  