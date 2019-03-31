
    var image  = new Image();
    image.src = "28356.jpg";

var bird = function(ctx){
    this.x =  50;
    this.h = 60;
    this.w = 40;  
    this.y = (500-this.h)/2;
    this.down = 10;
    this.up  =  50;

     

    
    this.show = function(){
       //ctx.strokeRect(this.x,this.y,this.w,this.h);
       // ctx.fillStyle= "black";
      ctx.drawImage(image,this.x,this.y) 
        
       // ctx.fillRect(this.x,this.y,this.w,this.h)
        
    }

    // image.onload(function(){
    // });

      this.update = function(){
        this.y += this.down;
        if(this.y > 470 ){
        this.y = 470;
        }
        if(this.y<0){
            this.y = 0; 
        }
        this.show();
        
    }
    this.push = function(){
        this.y -= this.up; 
    }
    
    
    this.check =  function(){
        
    }
}