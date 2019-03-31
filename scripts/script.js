$(function(){  
   
    var canvas = document.getElementById('canvas') || $("#canvas");
    var pipe,count=-1;
    var ctx = canvas.getContext("2d");
    var b = new bird(ctx);
    var pipes = [];
    var point_count = 0,
        point_eye = 0;
    var point = document.getElementById('pointer_load');
    var power= {
        p1: $(".power1"),//document.getElementsByClassName("power1"),
        p2: $(".power2"),//document.getElementsByClassName("power2"),
        p3: $(".power3")//document.getElementsByClassName("power3")
    }


var plw  = 0;
var  incPOint = setInterval(function(){
    point.style.width = ++plw + "px";
    if(plw === 150 && point_count < 3){
        pointInc();
    }
},100);

function pointInc(){
        plw = 0;
        point_count++;
        point_eye++;
     switch(point_eye){
        case 1:   power.p1.addClass("power_switch");
        break;
         case 2:    power.p2.addClass("power_switch");
        break; 
        case 3:    power.p3.addClass("power_switch");
        break;
    }
}
function pointDec(){
    
     switch(point_eye){
        case 1:    power.p1.removeClass("power_switch");
        break;
         case 2:    power.p2.removeClass("power_switch");
        break; 
        case 3:   power.p3.removeClass("power_switch");
        break;
    }
    point_eye--;
    point_count--;
    if(pipes[count-1].x > b.x){
        delete pipes[count-1];
        console.log(pipes.length);
    }else{
        delete pipes[count];
    }
    
}
   

var pipeAdd = setInterval(function(){
               count++;
               pipes[count] = new pipeCon(ctx);
               
},3000); 
    
    setInterval(function(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
            b.update();
            for(var i in pipes){
              pipes[i].update();

                if((b.x+60 > pipes[i].x && b.x < (pipes[i].x + pipes[i].w)) 
                   &&( b.y - 1 < pipes[i].h1 || b.y+35 > (500-pipes[i].h2))  
                  ){
                    
                    b.down=0;
                    b.up= 0;
                    clearInterval(pipeAdd);
                    clearInterval(incPOint);
                    for(var i in pipes)
                        pipes[i].speed = 0;
                   
           
                }
             }

    },60);
    
    
    
 $(document).keydown(function(event){
           if(event.keyCode === 32){
               b.push();
           } 
    //       alert(event.keyCode);
           if(event.keyCode === 13){
               if(point_eye> 0)
              pointDec();
           }
        });
    
    
});