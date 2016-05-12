function draw() {
var canvas = document.getElementById('canvas');
if (canvas.getContext) {

var ctx = canvas.getContext('2d');
//declare x and y as variables here
//assign each a value of 0

var x = 0 ;
var y = 0;

//call the drawChar(x,y) function here
drawChar(x,y);
}
}

//add a function header here. the 
//function should be named drawChar(x,y)

function drawChar(x,y) {
var canvas = document.getElementById('canvas');
if (canvas.getContext) {
var ctx = canvas.getContext('2d');

//add a +x to each x coordinate
//add a +y to each y coordinate

ctx.fillRect(200 + x,100 + y,70,50);
ctx.beginPath();
ctx.moveTo(200 + x,100 + y);
ctx.lineTo(170 + x,100 + y);
ctx.lineTo(170 + x,150 + y);
ctx.stroke();
ctx.fillStyle = "red";
ctx.fillRect(200 + x,150 + y,70,90);
ctx.moveTo(300 + x,150 + y);
ctx.lineTo(300 + x,100 + y);
ctx.lineTo(200 + x,100 + y);
ctx.stroke();
ctx.fillStyle = "yellow";
ctx.fillRect(205 + x,110 + y,20,10);
ctx.fillStyle = "yellow";
ctx.fillRect(240 + x,110 + y,20,10);

  }
}
