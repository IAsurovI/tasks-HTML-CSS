var canvas = document.getElementById("canvas2d");
/**
 * @type {CanvasRenderingContext2D}
 */
 var context = canvas.getContext("2d");

 function drawAxis(centerX,centerY){
     context.beginPath();
     context.moveTo(centerX,centerY);
     context.lineTo(canvas.clientWidth,centerY);
     context.moveTo(centerX,centerY);
     context.lineTo(centerX,0);
     context.stroke();

 }

function getRGBColor(){
    // let r = Math.random() * 255;
    // let g = Math.random() * 255;
    // let b = Math.random() * 255;
    let r=255;
    let g=0;
    let b=0;

    return "rgb("+r+","+g+","+b+")";
}

/**
 * 
 * @param {int} data 
 */
function findMax(data){
    let max = data[0];
    for(let index = 1; index < data.length; index++){
        if(max < data[index]){
            max = data[index];
        }
    }

    return max;
}

function signData(currentX,centerY,width,value,maxValue){

    let percentage = value / maxValue * 100;

    context.save();
    context.translate(currentX + width / 2, centerY);
    context.rotate(Math.PI / 4);
    context.font = "14px arial";
    context.fillText(Math.round(String(percentage))+ "%",0,canvas.height/40);
    context.restore();

}

function drawColumns(data){

    let maxData = findMax(data);
    let maxHeight = 300;
    let width = (canvas.clientWidth/2)/data.length;
    let x =  centerX;
    
    for(let index = 0;index < data.length; index++ ){

        let height = data[index] / maxData * maxHeight;
        //data[index] = 500
        //maxData = 1000
        //maxHeight = 300
        //height = 150

        context.fillStyle = getRGBColor();
        context.fillRect(x,centerY - height,width,height);
        signData(x,centerY,width,height,maxHeight);
        x +=width;
    }

}

 let centerX = canvas.clientWidth / 2;
 let centerY = canvas.clientHeight / 2;
 let data = [100,320,280,410,22,83,83,381,];   
//  console.log(findMax(data));
 drawAxis(centerX,centerY);
 drawColumns(data);