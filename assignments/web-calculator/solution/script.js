var result = document.getElementById("result");
var inputs = document.getElementsByTagName('input');


for (var i = 0; i < inputs.length; i++) { 
    inputs[i].addEventListener("click", function() {
        var value = this.value;

        if (value === "c") {
            reset();
        } else if (value === "=") {
            solve();
        } else {
            addToCarculation(value);
        }
    });
}

function addToCarculation(val) { 
    result.value+=val;
} 

function solve() { 
    var whatIsInResultsRigthNow = result.value;
    var newResult = eval(whatIsInResultsRigthNow);
    if (!isNaN(newResult)) {
        result.value = newResult;
    }
} 
  
function reset() { 
    result.value = ""; 
}