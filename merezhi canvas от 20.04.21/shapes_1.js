var canvas = document.getElementById("canvas2d");

/**
 * @type {CanvasRenderingContext2D}
 */

var context = canvas.getContext("2d");

function clearCanvas(){
    context.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
}

function createLine(size){

    let x = Math.random() * (canvas.clientWidth / 2 - canvas.clientWidth / 8) + canvas.clientWidth / 8;
    let y = Math.random() * (canvas.clientHeight / 2 - canvas.clientWidth / 8) + canvas.clientHeight / 8;

    context.strokeStyle = "rgb(0,200,0)";

    context.beginPath();
    context.moveTo(x,y);//move, not draw
    context.lineTo(x+size,y+size);
    context.font = "48px arial";
    context.strokeText("Line",x,y);
    context.closePath();
    context.stroke();

}

function createRectangle(x,y,width,height){
    context.fillStyle = "rgba(150,0,100,0.85)";

    context.beginPath();
    context.fillRect(x,y,width,height);

    context.fillStyle = "rgba(0,0,100,0.85)";
    context.font = "60px arial";
    context.fillText("REctangle",x,y);
}
function createCircle(x,y,radius){

    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    let alpha  =  Math.random();
    
    // context.fillStyle = "rgba(0,0,100,0.75)";
    context.fillStyle = "rgba("+r+","+g+","+b+","+alpha+")";

    context.beginPath();
    context.arc(x,y,radius,0,2*Math.PI,false);
    context.fill();

    let fontSize = Math.random() * (80 - 14) +  14; //[min;max] -> (max-min) + min
    context.font = fontSize + "px arial";
    context.fillText("Circle",x, y - radius);
    

}

function drawLine(){

    clearCanvas();
    createLine(200);
}

function drawRectangle(){

    clearCanvas();

    let x = Math.random() * (canvas.clientWidth / 2 - canvas.clientWidth / 8) + canvas.clientWidth / 8;
    let y = Math.random() * (canvas.clientHeight / 2 - canvas.clientHeight / 8) + canvas.clientHeight / 8;

    createRectangle(x,y,250,200);
}

function drawCircle(){
    clearCanvas();
    let x = Math.random() * (canvas.clientWidth / 2 - canvas.clientWidth / 8) + canvas.clientWidth / 8;
    let y = Math.random() * (canvas.clientHeight / 2 - canvas.clientHeight / 8) + canvas.clientHeight / 8;

    createCircle(x,y,100);

}

