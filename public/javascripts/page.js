 


function addH1() {

	var newH1 = document.createElement("h1");
	var newContent = document.createTextNode("My first blog post"); 
	newH1.appendChild(newContent);

	var currentElement = document.getElementById("firstP"); 
	var article1 = document.getElementById("firstArticle");
    article1.insertBefore(newH1, currentElement); 
}

document.getElementsByTagName("title")[0].textContent = "My JavaScript Blog";
document.getElementsByTagName("h1")[0].textContent = "My JavaScript Blog";

function addArticle() {
	var newArticle = document.createElement("article");
	document.body.appendChild(newArticle);

	var newH1 = document.createElement("h1");
	newH1.textContent = "My second blog post";
	newArticle.appendChild(newH1);

	var newPara = document.createElement("p");
	newPara.textContent = "This is my second blog post i've ever written";
	newArticle.appendChild(newPara);


    var currentElement = document.getElementById("firstArticle"); 
	document.body.insertBefore(newArticle,currentElement);
}

addArticle();
addH1();

var input = document.getElementsByTagName("h1");
console.log(input);
var inputList = Array.prototype.slice.call(input);
inputList.shift();
console.log(inputList);
inputList.forEach(function(element) {
	element.addEventListener("click", function(){
		console.log(element.nextSibling.style.display);
		if (element.nextSibling.style.display === "none")
		{element.nextSibling.style.display = "block";}
		else 
		{element.nextSibling.style.display = "none";}
		
	});
});

var paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
var paragraphsList = Array.prototype.slice.call(paragraphs);
console.log(paragraphsList);
paragraphsList.forEach(function(element) {
	element.addEventListener("click", function() {
		if (element.style.background === "yellow")
		{element.style.background = "white";}
		else {element.style.background = "yellow";}


	});


});


	


