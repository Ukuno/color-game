var numSquares = 6;
var colors = [];
var pickedColor;

 var squares = document.querySelectorAll(".squares");
 var message = document.querySelector("#message");
 var color = document.querySelector("#color");
 var h1 = document.querySelector("h1");
 var resetBtn = document.querySelector("#reset");
 var modeBtn = document.querySelectorAll(".mode");
 init();

 function init(){
 	setUpModeButton();
 	setUpSquares();
	reset();

 }
function setUpModeButton(){
	for( var i=0 ; i< modeBtn.length; i++){
	 	modeBtn[i].addEventListener('click', function(){
	 		modeBtn[0].classList.remove("selected");
	 		modeBtn[1].classList.remove("selected");
	 		this.classList.add("selected");

	 		this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
	 		reset();

	 	});
	 }
}

function setUpSquares(){
	for( var i=0 ; i<squares.length; i++){
	 	
	 	squares[i].addEventListener('click', function(){
	 		var clickedColor = this.style.backgroundColor;
	 		if(clickedColor === pickedColor){
	 			message.textContent = "Correct!!";
	 			resetBtn.textContent = "play again?";
	 			changeColor(pickedColor);
	 			h1.style.backgroundColor = clickedColor;
	 		} else {
	 			this.style.backgroundColor = "#232323";
	 			message.textContent = "Try again";
	 		}
	 	})
	 }
}
 

 function reset(){

 	colors = generatRandomColor(numSquares);
	pickedColor = randompickcolor();
	message.textContent = "";
	resetBtn.textContent ="New Colors"
    color.textContent = pickedColor;
    for( var i = 0; i<squares.length; i++){
    	if(colors[i]){
    		squares[i].style.display= "block";
 			squares[i].style.backgroundColor= colors[i];
 		} else {
 			squares[i].style.display= "none";
 		}
    }
    h1.style.backgroundColor = "steelblue";

    
 }

 
 resetBtn.addEventListener('click', function() {

 	reset();

 })

 function changeColor(color){
 	for( var i=0 ; i< squares.length; i++){
 		squares[i].style.backgroundColor = color;
 	}
 }

function randompickcolor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generatRandomColor(num){
	var arr = [];
	for( var i = 0; i<num; i++){
		arr.push(ramdomColor());
	}
	return arr;
}

function ramdomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}









