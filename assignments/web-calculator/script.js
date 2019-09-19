var result = document.getElementById("result"); //gets the element with id result
var inputs = document.getElementsByTagName('input'); //Gets all the elements in index.html that is of type input


//This code finds all buttons on screen and ads a function to them
for (var i = 0; i < inputs.length; i++){ 
    inputs[i].addEventListener("click", function() {
        var value = this.value; //This is the string value of the button

        //TODO: if the value is c then you should call the reset function
        //TODO: if the value is = then you should call the salve function
        //TODO: if the value is a number or one of these => ,*/+- then call the function addToValue
    });
}

function addToCarculation(val) { 
    //TODO: add the val into the value of the result
} 

function solve() { 
    var whatIsInResultsRigthNow = result.value; // This is the old value
    var newResult = eval(whatIsInResultsRigthNow); //using a standard function eval() we calculate the answer

    if (!isNaN(newResult)) { //Using isNaN to check if the value is a number
        result.value = newResult; //if it is a number then display on screen
    }
} 
  
function reset() { 
    //TODO: remove what ever is in result.value and set it to an empty string
}