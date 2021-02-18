class Man {
    constructor(x, y, width, height) {
      var options = {
          'isStatic':true,
          'restitution':0.4,
          'friction':0,
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage('walking_1.png');

      
      
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
     
      var pos=this.body.position;		

			push()
			translate(pos.x, pos.y);
			
            imageMode(CENTER);
			image(this.image,70,200,400,400);
			pop()
  
  
  
  }  

}
  