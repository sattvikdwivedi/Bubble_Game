var timer=60;
var score=0;
var n=0;
  function bubblecall()
  {var number="";
 for (var i=0;i<140;i++){
    var a=Math.floor(Math.random()*10);
    number+=` <div class="bubble">${a}</div>`;
 }
 document.querySelector("#lbtm").innerHTML=number;}
 
 function runner(){
   var interval= setInterval(function(){
        
    document.querySelector("#time").innerHTML=timer;
    if(timer>0){
        timer--;
    }
    else{
        clearInterval(interval);
          document.querySelector("#lbtm").innerHTML="";
    }
    
    },1000);
 }
 function hitAndtrial(){
     n=Math.floor(Math.random()*10);
    document.querySelector("#shot").innerHTML=n;
 }

 function scoreRunner(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;

 }
 
function matching()
   {  document.querySelector("#lbtm").addEventListener("click", function(dets){
        var res= Number(dets.target.textContent);
        if(res===n){
            scoreRunner();
            hitAndtrial();
            bubblecall();
        }
        
    })}

bubblecall();
hitAndtrial();
runner();
 matching();
 
