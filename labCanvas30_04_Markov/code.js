var canvas = document.getElementById("canvas2d");
/**
 * @type {CanvasRenderingContext2D}
 */
var context = canvas.getContext("2d");
//webgl

const width = canvas.clientWidth;
const height = canvas.clientHeight; 
function sun1(x,y){    
    //border
    context.fillStyle = "rgb(255,255,255)";
    context.beginPath();
    context.arc(x,y,60,0,2*Math.PI);
    context.fill();
    context.fillStyle = "rgb(0,0,0)";
    context.beginPath();
    context.arc(x,y,53,0,2*Math.PI);
    context.fill();
    //sun
    context.fillStyle = "rgb(255,255,0)";
    context.beginPath();
    context.arc(x,y,50,0,2*Math.PI);
    context.fill();
    //eyes
    for(let i=0;i<2;i++){
    context.fillStyle = "rgb(0,0,0)";
    context.beginPath();
    context.arc(x-15,y-10,5,0,2*Math.PI);
    context.fill();
    x+=30;}
    //smile
    context.strokeStyle = "rgb(0,0,0)";
    context.beginPath();
    context.lineWidth = 2;
    context.arc(x-60, y+10, 25, 0, Math.PI,false);
    context.stroke();
    //lines
    }
    function drawEqualSectors(number,radius){

        let angle = 30;
        let deltaAngle = (2*Math.PI) / number; 
        let length=[];
        for(let r=0;r<=number;r+=2){
            length[r]=150;
            length[r+1]=100;
           
        }
        for(let i = 0; i < number; i++){
            let currentX = 300 + length[i] * Math.cos(angle);//ДЛИНА ЛИНИИ ОТ radius 
            let currentY = 300 - length[i] * Math.sin(angle);
            context.strokeStyle = "rgb(255,165,0)";
            context.beginPath(); 
            context.moveTo(300,300);
            context.lineTo(currentX, currentY);
            context.lineLength=50;
            context.lineWidth = 5;
            context.stroke();
            angle +=deltaAngle;
        }
    }

drawEqualSectors(20, 200);
sun1(300,300);

