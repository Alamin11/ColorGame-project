//alert("connected");
var numOfSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var displayColor = document.querySelector("#displayColor");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){

	//Mode selecting 
	setUpMode();
	//Setting up squares
	setUpSquares();
	reset();
}
	
	function setUpMode(){
		for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			//alert("ok");
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			 //Updating the numSquares for easy and hard mode
			this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
			reset();
			});
		}
	}

	function setUpSquares(){
		for(var i =0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];

		//Adding eventListener
		squares[i].addEventListener("click", function(){
			//color grabing 
				var clickedColor = this.style.backgroundColor;
			//color comparing
				if(pickedColor===clickedColor)
				{
					//alert("correct");
					messageDisplay.textContent = "Wow! Correct";
					changeColor(clickedColor);
					h1.style.backgroundColor = clickedColor;
					resetButton.textContent = "Play Again!"
				}
				else
					{
						this.style.backgroundColor = "#0b0b2e";
						messageDisplay.textContent = "Opps! Try again";
					}
			});
		
		}
	}

	function reset(){
		colors = generateRandomColors(numOfSquares);
		//pick a new random color from array
		pickedColor = pickColor();
		//change colors of display color to match 
		displayColor.textContent = pickedColor;
		h1.style.backgroundColor = "steelblue";
		resetButton.textContent  =  "Reset colors";
		messageDisplay.textContent = " ";
		//change colors of squares
		for(var i = 0; i<squares.length; i++){
			if(colors[i]){
				squares[i].style.display = "block";
				squares[i].style.backgroundColor = colors[i];
			} else
				{
					squares[i].style.display = "none";
				}

		}
			
	}

//Highliting the selected mode between the two buttons
	// hardBtn.addEventListener("click", function(){
	// 	numOfSquares = 6;
	// 	this.classList.add("selected");
	// 	easyBtn.classList.remove("selected");
	// 	colors = generateRandomColors(numOfSquares);
	// 	pickedColor = pickColor();
	// 	messageDisplay.textContent = "";
	// 	h1.style.backgroundColor = "steelblue";
	// 	resetButton.textContent = "Reset colors";
	// 	displayColor.textContent = pickedColor;
	// 	for(var i = 0; i< squares.length; i++)
	// 	{
	// 		if(colors[i])
	// 		{
	// 			squares[i].style.backgroundColor = colors[i];
	// 			squares[i].style.display = "block";
	// 		}
	// 	}
	// });

	// easyBtn.addEventListener("click", function(){
	// 	numOfSquares = 3;
	// 	this.classList.add("selected");
	// 	hardBtn.classList.remove("selected");
	// 	colors = generateRandomColors(numOfSquares);
	// 	pickedColor = pickColor();
	// 	displayColor.textContent = pickedColor;
	// 	messageDisplay.textContent = "";
	// 	h1.style.backgroundColor = "steelblue";
	// 	resetButton.textContent = "Reset colors";
	// 	for(var i = 0; i< squares.length; i++)
	// 	{
	// 		if(colors[i])
	// 		{
	// 			squares[i].style.backgroundColor = colors[i];
	// 		}
	// 		else
	// 		{
	// 			squares[i].style.display = "none";
	// 		}
	// 	}
	// });
//Restarting another game 
	resetButton.addEventListener("click", function(){
		// alert("ok, reset");
		//generate all new colors
		reset();

	});



function changeColor(color){
	for(var i=0;i<squares.length; i++)
	{
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];

}

function generateRandomColors(num)
{
	//Creating an array
	var arr = [];
	//reapting num times
	for(var i=0;i<num;i++)
	{
		//Get random color and push it to arr
		arr.push(randomColor());
	}
	//returning the array
	return arr;
}

function randomColor(){
	//pick a 'red' color from 0-255
	var r = Math.floor(Math.random()*256);
	//pick a 'green' color from 0-255
	var g = Math.floor(Math.random()*256);
	//pick a 'blue' color from 0-255
	var b = Math.floor(Math.random()*256);

	//now return "rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}