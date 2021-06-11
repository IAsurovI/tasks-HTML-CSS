var canvas = document.getElementById("canvas2d");
/**
 * @type {CanvasRenderingContext2D}
 */
var context = canvas.getContext("2d");
//webgl

const width = canvas.clientWidth;
const height = canvas.clientHeight; 

function drawSector(x, y, radius){
    context.fillStyle = "rgb(130,120,180)";
    context.arc(x, y, radius, Math.PI/30, Math.PI/6);
    context.lineWidth = 2;
    context.lineTo(x,y);
    context.fill();
}
function drawCircleMinusSector(x, y, radius){
    context.strokeStyle = "rgb(130,120,180)";
    context.lineTo(x,y);
    context.arc(x, y, radius, Math.PI/3, Math.PI/6);
    context.lineWidth = 2;
    context.lineTo(x,y);
    context.stroke();
}
// drawSector(300,300,200);
drawCircleMinusSector(300,300,200);




// function drawCirclePlusSector(x, y, radius){
//     context.fillStyle = "rgb(130,120,180)";
//     context.arc(x, y, radius, Math.PI/30, Math.PI/6);
//     context.lineWidth = 2;
//     context.lineTo(x,y);
//     context.fill();
//     context.strokeStyle = "rgb(130,120,180)";
//     context.lineTo(x,y);
//     context.arc(x, y, radius, Math.PI/9, Math.PI/12);
//     context.lineWidth = 2;
//     context.lineTo(x,y);
//     context.stroke();
// }
// drawCirclePlusSector(300,300,200);
