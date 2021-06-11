var canvas = document.getElementById("canvas2d");
/**
 * @type {CanvasRenderingContext2D}
 */
var context = canvas.getContext("2d");
//webgl

const width = canvas.clientWidth;
const height = canvas.clientHeight; 

function drawAxis(){

    context.strokeStyle = "rgb(100,50,50)";  
    context.beginPath();

      //OY
      context.moveTo(width / 2, 0);
      context.lineTo(width / 2, height);

      //OX
      context.moveTo(0, height / 2);
      context.lineTo(width, height / 2); 
      
      context.closePath();
      context.stroke();

}

function getColors(){

    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);

    let rgb = [r,g,b];
    return rgb;
}


function drawRandomCircles(circlesNumber){

    for(let i = 0; i < circlesNumber; i++){

        let colors = getColors();
        context.fillStyle = "rgb("+colors[0]+","+colors[1]+","+colors[2]+")";

        context.beginPath();

        let x = Math.random() * (width - width / 4) + width / 4;
        let y = Math.random() * (height - height / 4) + height / 4;
        let radius = Math.random() * (width / 4 - width / 8) + width / 8;

        context.arc(x,y,radius,0,2*Math.PI,false);
        context.fill();   

    }    

}


function drawColorGrid(){

    let x = 0;
    let y = 0;
    let size = width / 10;

    context.beginPath();
    for(let row = 0; row < 10; row++){
        for(let column = 0; column < 10; column++){

            let colors = getColors();
            context.fillStyle = "rgb("+colors[0]+","+colors[1]+","+colors[2]+")";
            context.fillRect(x,y,size,size)

            x +=size;
        }
        x = 0;
        y +=size;
    }
}

function drawText(number){

    for(let i = 0; i < number; i++){
        
        let colors = getColors();
        context.fillStyle = "rgb("+colors[0]+","+colors[1]+","+colors[2]+")";
        
        let x = Math.random()*(canvas.clientWidth  - canvas.clientWidth / 8) + canvas.clientWidth / 8;
        let y = Math.random()*(canvas.clientWidth  - canvas.clientWidth / 8) + canvas.clientWidth / 8;

        let fontSize = Math.random()* (80 - 14) + 14;
        context.font = fontSize + "px arial";
        context.fillText("be inspired!!!",x,y);

    }
}

function drawCircle(x,y,radius){
   
    let colors = getColors();
    context.strokeStyle = "rgb("+colors[0]+","+colors[1]+","+colors[2]+")";

    context.beginPath();

    context.arc(x,y,radius,0,2*Math.PI,false);

    let deltaX1 = x + Math.cos(Math.PI / 4) * radius;
    let deltaY1 = y - Math.sin(Math.PI / 4) * radius;

    let deltaX2 = x + Math.cos(5*Math.PI / 4) * radius;
    let deltaY2 = y - Math.sin(5*Math.PI / 4) * radius;

    context.moveTo(x + Math.floor(deltaX1),y - Math.floor(deltaY1));
    context.lineTo(x + Math.floor(deltaX2),y - Math.floor(deltaY2));

    console.log(deltaX1, deltaY1);

    context.closePath();

    context.stroke();

    context.save();
    context.clip();

    
    var circlesCount = Math.floor(Math.random() * 18 + 5);
    // drawRandomCircles(circlesCount);
    // drawColorGrid();
    drawText(20);
    context.restore();
}



function drawEqualSectors(number,radius){

    let angle = 0;
    let deltaAngle = (2*Math.PI) / number; 
    context.lineWidth = 8;
    let qw=[];
    for(let r=0;r<number;r++){
    qw[r]=Math.round(angle*180/Math.PI);
    angle+=deltaAngle;
    }
    for(let i = 0; i < number; i++){
           
        let currentX = centerX + radius * Math.cos(angle);
        let currentY = centerY - radius * Math.sin(angle);

        context.beginPath(); 
        context.moveTo(centerX,centerY);
        context.lineTo(currentX,currentY);
        context.lineWidth = 1;
        context.font = "16px serif";
        context.strokeText(qw[i], currentX, currentY);
        context.stroke();
        angle +=deltaAngle;
    }
   

}
// function drawParabola(){
    
//     //
//     context.save();
//     context.clip();

//     //function (-s)  to draw smth
//     var circlesCount = Math.floor(Math.random() * 18 + 5);
//     drawRandomCircles(circl

// }

var centerX = width / 2;
var centerY = height / 2;

drawAxis();
drawCircle(centerX,centerY, 200);
drawEqualSectors(12,200);
// drawSectors(6,centerX,centerY,100);
// drawParabola(<parameters>);
// context.beginPath();
// context.arc(centerX,centerY,100,Math.PI / 3, Math.PI / 6,true);
// context.stroke();
