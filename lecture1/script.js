var addButton = document.getElementById("add");
var subButton = document.getElementById("subtract");
var counter = document.getElementById("counter");

addButton.addEventListener("click", function(){
    var value = parseInt(counter.value);
    value = value + 1;
    counter.value = value
});

subButton.addEventListener("click", function(){
    var value = parseInt(counter.value);
    value = value - 1;
    counter.value = value
});