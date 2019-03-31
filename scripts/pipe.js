var gap = 120;
var pipeCon= function(ctx){
    this.top =  0;
    this.w = 60;
    this.h1 = parseInt(Math.random()*400);
    this.x = 760;
    this.y1 = 0;
    this.speed = 10;
    this.h2 = 500-(this.h1+gap);
    this.y2 = 500-this.h2;

    
    this.show = function(){
        ctx.strokeRect(this.x,this.y1,this.w,this.h1);
        ctx.fillStyle= "black";
        ctx.fillRect(this.x,this.y1,this.w,this.h1)
        
    }
    this.update = function() {
        this.show();
        this.show2();
        this.x -= this.speed;
        
    }
    this.show2 = function(){
     ctx.strokeRect(this.x,this.y2,this.w,this.h2);
        ctx.fillStyle= "black";
        ctx.fillRect(this.x,this.y2,this.w,this.h2)

    }
}
/*
var pipe_bot = function(ctx){
    
    this.bottom =  0;
    this.w = 60;
    
    this.h = parseInt((Math.random()*gap)-100);
    this.x = 600;
    this.y = 500;
    this.speed = 10;
    
    this.show = function(){
        ctx.strokeRect(this.x,this.y,this.w,this.h);
        
    }
    this.update = function() {
        this.show();
        this.x -= this.speed;
        
    }
}
*/