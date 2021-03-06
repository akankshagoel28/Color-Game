var numOfSquares = 6;
var colors=[]
var pickedColor
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.querySelector("#message")
var squares= document.querySelectorAll(".square")
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset")
var modeButtons = document.querySelectorAll(".mode")
init()
function init() {
	//mode buttons event listeners
	for(var i=0; i<modeButtons.length; i++){
	modeButtons[i].addEventListener("click",function() {
		modeButtons[0].classList.remove("selected")
		modeButtons[1].classList.remove("selected")
        this.classList.add("selected")
        if (this.textContent=="Easy") {
        	numOfSquares=3
        }
        else{
        	numOfSquares=6
        }
        reset()
	})
}
for (var i = 0; i <squares.length; i++){
	//add click listeners to squares
	squares[i].addEventListener("click", function() {
	 //grab color of clicked square
	 var clickedColor = this.style.backgroundColor;
	 if(clickedColor==pickedColor){
	 	messageDisplay.textContent="Correct!"
	 	resetButton.textContent="Play Again?"
	 	changeColors(clickedColor)
	 	h1.style.backgroundColor=clickedColor
	 }
	 else{
	 	this.style.backgroundColor = "#232323"
	 	messageDisplay.textContent = "Try Again"
	 }
	})
   }
   reset()
}

function reset(){
	colors=generateRandomColors(numOfSquares)
	pickedColor=pickColor()
	colorDisplay.textContent=pickedColor
	resetButton.textContent="New Colors"
	for (var i = 0; i< squares.length; i++){
	//add initial colors to squares
	if(colors[i]){
	squares[i].style.display = "block"
	squares[i].style.backgroundColor = colors[i]
}
    else{
    	squares[i].style.display="none"
    }
	}
	h1.style.backgroundColor="steelblue"
	messageDisplay.textContent=""
} 
resetButton.addEventListener("click", function(){
	reset()
})

function changeColors(color) {
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor = color
	}
}
function pickColor() {
	var random = Math.floor(Math.random() * colors.length)
	return colors[random]
}
function generateRandomColors(num){
	var arr=[]
	for(var i=0; i<num; i++){
     arr[i]=randomColor()
	}
	return arr
}
function randomColor(){
	var r=Math.floor(Math.random() * 256)
	var g=Math.floor(Math.random() * 256)
	var b=Math.floor(Math.random() * 256)
    return ("rgb("+r+", "+g+", "+b+")")
}