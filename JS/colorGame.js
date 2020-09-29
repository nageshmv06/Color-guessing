var numSquares = 6;
var colors = getRandomColor(numSquares);
var pickedColor = colorPick();

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    resetButton.textContent = "New Colors";
    colors = getRandomColor(numSquares);
    pickedColor = colorPick();
    colorDisplay.textContent = pickedColor;
    for(var i =0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
       }
    }
});

hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    resetButton.textContent = "New Colors";
    numSquares = 6;
    colors = getRandomColor(numSquares);
    pickedColor = colorPick();
    colorDisplay.textContent = pickedColor;
    for(var i =0; i<squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";    
    }
})

resetButton.addEventListener("click", function(){
    //generate new colors
    colors = getRandomColor(numSquares);
    //pick a new random color from array
    pickedColor = colorPick();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";
    //change colors of squares
    messageDisplay.textContent = "";
    for(var i =0; i< squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
})

for(var i=0; i<squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listener
    squares[i].addEventListener("click", function(){
        //grab color of the clicked square
        var clickedColor = this.style.backgroundColor;
        //compare the color
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "Play Again?";
            changeColor(clickedColor);
            h1.style.backgroundColor = pickedColor;
        }else{
            this.style.backgroundColor = "rgb(0, 0, 0)";
            messageDisplay.textContent = "Try Again!!";
        }
    })
}

function changeColor(color) {
    //loop through colors
    for(i = 0; i<squares.length; i++){
        //assign every color to clickedColor
        squares[i].style.backgroundColor = color;
    }
}

function colorPick(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function getRandomColor(num){
    var arr = [];
    for(var i=0;i<num; i++){
       arr.push(generateRandom());
    }
    return arr;
}

function generateRandom() {
     var r = Math.floor(Math.random() * 256);
     var g = Math.floor(Math.random() * 256);
     var b = Math.floor(Math.random() * 256);
     return "rgb(" + r + ", " + g + ", " + b + ")";
}
