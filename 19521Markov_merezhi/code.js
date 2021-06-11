function handler(e){//прозрачность
   document.getElementById("image1").style.opacity=document.getElementById('nb1').value;
  }

function handler1(e){//серый цвет
   document.getElementById("image1").style.filter ='grayscale('+verniGray()+'%'+')';
    function verniGray(){
        var grayscale=document.getElementById('nb2').value;
        return grayscale;
    }
   }
   function handler2(e){//размытие
    document.getElementById("image1").style.filter='blur('+verniBlur()+'px'+')';
     function verniBlur(){
         var blur=document.getElementById('nb3').value;
         return blur;
     }
   }