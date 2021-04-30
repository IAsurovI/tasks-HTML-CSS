var canvas = document.getElementById("canvas2d");

/**
 * @type {CanvasRenderingContext2D}
 */
var context = canvas.getContext("2d");


function getColors(){
    
    let r = Math.random()*255;
    let g = Math.random()*255;
    let b = Math.random()*255;

    let rgb = [r,g,b];

return rgb;
}

function colorGrid(cellsNumber){

    let cellSize = Math.floor(canvas.clientWidth / cellsNumber);
    let countOfCells = Math.pow(cellsNumber,2);
    let x = 0;
    let y = 0;
    let alpha = 0;
    let deltaAlpha = 1 / countOfCells;

    for(let row = 0; row < cellsNumber; row++){

        for(let column =0; column < cellsNumber; column++){

            let colors = getColors();//colors[0],colors[1],colors[2]
            // context.fillStyle = "rgb(0,200,0)";
            context.fillStyle = "rgba("+colors[0]+","+colors[1]+","+colors[2]+","+alpha+")";

            context.beginPath();

            // context.fillRect(x,y,cellSize,cellSize);

            context.ellipse(x, y, cellSize / 4, cellSize / 2, - Math.PI / 3, 0, 2 * Math.PI, false);
            context.fill();
            x +=cellSize;
            alpha +=deltaAlpha;
        }

        x = 0;
        y += cellSize;
    }
}

function rainbow(x, y, radius){

    let rainbowColors = ["#990099", "#000099", "#0033FF", "#00CC00", "#FFFF00", "#FF3300", "#FF0000"];
    let colorsNames = ["Violet", "Blue", "Skyblue", "Green", "Yellow", "Orange", "Red"];

    // context.font = "48px serif";
    // context.strokeText("Rainbow", x, y);

    // context.lineWidth = 20;
    for(let i = 0; i < 7; i++){
        
        context.strokeStyle = rainbowColors[i];
        context.beginPath();
        context.lineWidth = 7;
        context.arc(x, y, radius * (i + 1), 0 , Math.PI, true);
        context.stroke();

        context.lineWidth = 1;
        context.font = "16px serif";
        context.strokeText(colorsNames[i], x + 230, y - (radius*i)-radius);


        // context.arc(x, y, radius * (i + 1), Math.PI*4, Math.PI, true);//круг
        context.stroke();

    }
}

var cellsNumber = Math.floor(Math.random()*(20-2) + 2);
// colorGrid(cellsNumber);
rainbow(250, 250, 30);



