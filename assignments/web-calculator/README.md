# web-calculator
This is a simple web app to get you started to do more advanced programming in the future. The structor is quite simple. 

## Script.js
This is the javascript part of the code. Alle Javascript functions and variables are declared in here. If you want to do anything it should be added inside of these document. 

### Document handling
In the top of the file you will see the following 
var result = document.getElementById("result");
var inputs = document.getElementsByTagName('input'); 

These are all the elements that I have polled out of the index.html fil. It is good practice to collect them at the top of your document and assign them a variable. In this case the two local references are result and inputs. 

Inputs are of type array, since I’m not getting one element, but several. What an array is, and how to use them will be explained later in the course. However if you are interested in learning please follow this link [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Array][1]. For now, you can just think of an array as a list of elements, where the fist element starts at index 0. 

### The Loop
Next in the document you’ll find a loop. This is a loop that goes through all the elements in inputs. 

```js
 for (var i = 0; i < inputs.length; i++)
```

This line of code says: Run through the code as many times as you can. The way we keep track of how many run troughs we have done is with the variable i.

To begin, the variable i is set to 0 and at the end of each run it will increase with 1. That is what we say with the i++ statement at the end of the for declaration. This will continue as long as i is less the inputs.length (this is the number of items). 

The moment i equal to inputs.length then the code will stop. 

## Index.html
This contains all the html that is required in this project. Everything is inside a root div calls simply root. 
`<div id="root">` 

The entire calculator is set up using a `<table>` tag. The rows are as follows:
```html
<tr> 
	<td>
       <input type="button" value="1"/>
    </td> 
    <td>
    	<input type="button" value="2"/>
    </td> 
    <td>
    	<input type="button" value="3"/>
    </td> 
    <td>
       <input class="function-key" type="button" value="/"/>
    </td> 
</tr>
```
This is the first row with numbers and are quite representable for all the other rows. The `<tr>` tags are stands for table row and contains all the other tags that is displayed on that row. `<td>` tags are part of the row. Think of it as it’s own cell in a spreadsheet. If you want the table to look nice alle the `<tr>` tags should have an equal amount of `<td>` tags. 

Other wise, you can pass this restraint by saying `<td colspan="3">`. This is what i have done in order to span the text field over tre colums in stead of it being equal to all other tags in this calculator. 

[1]:	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array