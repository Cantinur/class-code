# class-code
Welcome to the class git! I’m going to publish lecture code as well as some assignments a create/ find on the web here. 

## Different files
There are mainly three different files that goes in to creating a webpage. Each of these three files can be put in to one, however if you are working with someone or on a large project, then it’s much smarter to split the files in to different expert domains. 

### HTML
The html file is probably the moste important one. This course does not go in to detail on what this file should include, but think of it as the content of on the page. The text that you can read, and the images that you can see. However this file should not contain how the page should look and not specific functions. You can include these in this file by doing the following. 

#### Styles:
```html
<h1 style="font-family:verdana;">
	This is a heading
</h1>

<p style="font-family:courier;">
	This is a paragraph.
</p>
```

#### Script:
```js
<script type="text/javascript">
	var i = 10;
	if (i < 5) {
	  // some code
	}
</script>
```

If you split them into different files the HTML needs to know about the others. So if you want to include a script with your html do the following:

```js
<body>
	<!— Your HTML here —>

	<script src=«./filepah/filename.js» />
</body>
```
The file path and file name needs to be changed to where you have stored the file. As an example, lets say you have a index.html file stored in a folder. You create a file called myJavaScript.js and want all the code to work with your html. Then you have to do the following. 

```js
<body>
	<!— Your HTML here —>

	<script src=«./myJavaScript.js» />
</body>
```

This does not need any other file path since the file lays side by side with the html file. 

#### File
The HTML file should end with .html. This indicate that it contains html


### Javascript 
This is the file that is moste important in this course. This is where you can write javascript code and compartmentalise it form the rest of your code. 

Unlike HTML Javascript does not need to begin with any specific tags. What you do have to do is type concise code. 

#### Store the file
The best place to store the file is inside the same folder as you stored your HTML file. This is for convenience so if your project gets big then you might need to change this structure. 

#### File name
You can call the file what ever you like.

#### File ending
The file should end with .js as a rule. This indicate that the file is a javascript file. 

