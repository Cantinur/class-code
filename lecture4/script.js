var button = document.querySelector('button');
var textField = document.getElementById('text-input');
var list = document.getElementById('todo-list');

function createListItem(text) {
    //Text
    var listItem = document.createElement('li');
    var textContent = document.createTextNode(text);
    listItem.appendChild(textContent);
    
    //`<li>${text}</li>`;
    //Når noen tykker på den så skal den fullføres
    listItem.onclick = function () {
        listItem.style.textDecoration = 'line-through';
    }
    
    //Vise at den er markert
    listItem.onmouseover = function () {
        listItem.style.color = 'red';
    }
    
    listItem.onmouseout = function() {
        listItem.style.color = 'black';
    }
    
    
    return listItem;
}

function addToList() {
    var text = textField.value;
    if (text.length > 0) {
        var listItem = createListItem(text);
        list.appendChild(listItem);
        
        textField.value = "";
    }
}

button.onclick = addToList;
textField.onkeypress = function () {
    var key = event.key
    if (key === 'Enter') {
        addToList();
    }
}

textField.onkeypress();












